"use client";
import React, { useEffect, useState } from "react";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function Page() {
	interface item {
		_id: number;
		title: string;
		description: string;
	}
	const [items, setItems] = useState<item[]>([]);
	// GET HANDLER
	useEffect(() => {
		const fetchData = async () => {
			try {
				await fetchItems();
			} catch (error) {
				console.error("Failed to fetch items:", error);
			}
		};
		fetchData();
	}, []);
	const fetchItems = async () => {
		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/api/crud/menuitems`,
			);
			const data = await response.json();
			setItems(data);
		} catch (error) {
			console.error("Error fetching items:", error);
		}
	};
	// POST HANDLER
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [showErrorDialog, setShowErrorDialog] = useState(false);
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			setIsSubmitting(true);
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/api/crud/menuitems`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				},
			);

			if (response.ok) {
				setFormData({ title: "", description: "" }); // Clear form data
				alert("Item added successfully");
				// Refetch the items to ensure the UI is up-to-date
				fetchItems();
			} else {
				const errorData = await response.json();
				alert(`Error adding item: ${errorData.message}`);
			}
		} catch (error) {
			if (error instanceof Error) {
				setErrorMessage(error.message);
			} else {
				setErrorMessage("An unknown error occurred");
			}
			setShowErrorDialog(true);
		} finally {
			setIsSubmitting(false);
		}
	};

	// UPDATE HANDLER
	interface item {
		_id: number;
		title: string;
		description: string;
	}
	const [editingItem, setEditingItem] = useState<item | null>(null);
	const [formData, setFormData] = useState({
		title: "",
		description: "",
	});
	const handleEdit = (item: item) => {
		setEditingItem(item);
		setFormData({
			title: item.title,
			description: item.description,
		});
		// Open the dialog (if needed, depending on how you handle the dialog's visibility)
	};
	const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};
	const handleSubmitEdit = async () => {
		if (!editingItem) {
			// Handle the case where editingItem is null (just to be safe)
			alert("No item is being edited");
			return;
		}
		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/api/crud/menuitems/${editingItem._id}`,
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				},
			);

			if (response.ok) {
				alert("Item updated successfully");
				// Close the dialog and refetch items
				setEditingItem(null);
				fetchItems();
			} else {
				const errorData = await response.json();
				alert(`Error updating item: ${errorData.message}`);
			}
		} catch (error) {
			console.error("Error during update:", error);
			alert("Failed to update the item.");
		}
	};

	// DELETE HANDLER
	const handleDelete = async (id: number) => {
		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/api/crud/menuitems/${id}`,
				{
					method: "DELETE",
				},
			);

			if (response.ok) {
				setItems((prevItems) =>
					prevItems.filter((item: item) => item._id !== id),
				);
				alert("Item deleted successfully");
				// Optionally refresh the list or remove the deleted item from state
			} else {
				const errorData = await response.json();
				alert(`Error deleting item: ${errorData.message}`);
			}
		} catch (error) {
			console.error("Error during deletion:", error);
			alert("Failed to delete the item.");
		}
	};

	return (
		<div>
			<div className='block m-5 '>
				INPUT DATA INTO THE PHWANYA-YANGA DATABASE
				<form onSubmit={handleSubmit}>
					<div className='block'>
						<input
							type='text'
							name='title'
							value={formData.title}
							onChange={handleFormChange}
							placeholder='Enter menu item'
							className='m-2 p-2 rounded-md border border-black'
						/>
						<input
							type='text'
							name='description'
							value={formData.description}
							onChange={handleFormChange}
							placeholder='Enter menu item description'
							className='m-2 p-2 rounded-md border border-black'
						/>
						<button
							type='submit'
							className='m-2 p-2 rounded-md border w-[100px] bg-orange-700 text-white'
							disabled={isSubmitting}>
							{isSubmitting ? "Sending..." : "Send"}
						</button>
					</div>
				</form>
				{errorMessage && (
					<AlertDialog open={showErrorDialog} onOpenChange={setShowErrorDialog}>
						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle>Error Occurred</AlertDialogTitle>
								<AlertDialogDescription>{errorMessage}</AlertDialogDescription>
							</AlertDialogHeader>
							<AlertDialogFooter>
								<AlertDialogCancel onClick={() => setShowErrorDialog(false)}>
									Close
								</AlertDialogCancel>
								<AlertDialogAction onClick={() => setShowErrorDialog(false)}>
									OK
								</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>
				)}
			</div>
			<h1 className='w-[100%] m-2'>
				this is the data that is inside of the phwanyayanga database:
			</h1>
			<div className='grid grid-cols-2 gap-4 m-2 p-4'>
				{items.map((item: item, index) => (
					<div key={index} className='border rounded-md p-4'>
						<div className='relative'>
							<div className='flex absolute right-0 top-0'>
								<AlertDialog
									open={!!editingItem}
									onOpenChange={(open) => !open && setEditingItem(null)}>
									<AlertDialogTrigger asChild>
										<button
											className='border bg-blue-600 text-white p-1 w-[50px] rounded-md'
											onClick={() => handleEdit(item)}>
											Edit
										</button>
									</AlertDialogTrigger>
									<AlertDialogContent>
										<AlertDialogHeader>
											<AlertDialogTitle>Edit</AlertDialogTitle>
											<AlertDialogDescription>
												<form>
													<input
														type='text'
														name='title'
														id='title'
														value={formData.title}
														onChange={handleFormChange}
														placeholder='Title'
														className='m-2 p-2 rounded-md border border-black'
													/>
													<br />
													<input
														type='text'
														name='description'
														id='description'
														value={formData.description}
														onChange={handleFormChange}
														placeholder='Description'
														className='m-2 p-2 rounded-md border border-black'
													/>
												</form>
											</AlertDialogDescription>
										</AlertDialogHeader>
										<AlertDialogFooter>
											<AlertDialogCancel>Cancel</AlertDialogCancel>
											<AlertDialogAction
												type='button'
												className='bg-blue-700 text-white'
												onClick={handleSubmitEdit}>
												Change
											</AlertDialogAction>
										</AlertDialogFooter>
									</AlertDialogContent>
								</AlertDialog>
								<AlertDialog>
									<AlertDialogTrigger className='border bg-red-800 text-white p-1 w-[50px] rounded-md'>
										Delete
									</AlertDialogTrigger>
									<AlertDialogContent>
										<AlertDialogHeader>
											<AlertDialogTitle>
												Are you absolutely sure?
											</AlertDialogTitle>
											<AlertDialogDescription>
												This action cannot be undone. This will permanently
												remove the Menu Item from the list.
											</AlertDialogDescription>
										</AlertDialogHeader>
										<AlertDialogFooter>
											<AlertDialogCancel>Cancel</AlertDialogCancel>
											<button>
												<AlertDialogAction
													className='bg-red-800 text-white'
													onClick={() => handleDelete(item._id)}>
													Continue
												</AlertDialogAction>
											</button>
										</AlertDialogFooter>
									</AlertDialogContent>
								</AlertDialog>
							</div>
							<div>Id: {item._id}</div>
							<div className='mt-2'>Name: {item.title}</div>
							<div className='my-2'>Description: {item.description}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Page;
