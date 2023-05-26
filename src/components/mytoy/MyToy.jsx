import { Table } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import MyToysRow from "./MyToysRow";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import UseTitle from "../title/UseTitle";


const MyToy = () => {
  const [myToys, setMyToys] = useState(null);
  const { user } = useContext(AuthContext);
  UseTitle('R-T|Blog')

  useEffect(() => {
    const fetchToys = async () => {
      try {
        const response = await fetch(
          `https://robo-kit-toy-server-aalnoman2042.vercel.app/mytoy/${user?.email}`
        );
        const data = await response.json();
        setMyToys(data);
      } catch (error) {
        console.log("Error fetching toys:", error);
      }
    };

    fetchToys();
  });

  if (!myToys) {
    return (
      <div className="flex justify-center">
        <progress className="w-56 progress "></progress>
      </div>
    );
  }

  // const handleDelete = (id) => {
  //   const proceed = Swal.fire('are you sure ? you want to delete?');
  //   if(proceed){
  //     fetch(`https://robo-kit-toy-server-aalnoman2042.vercel.app/dlttoy/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.deletedCount > 0) {
  //         Swal.fire("toy deleted successfully");
  //         const remaining = myToys.filter((toys) => toys._id !== id);
  //         setMyToys(remaining);
  //       }
  //     });
  //   }
  // };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://robo-kit-toy-server-aalnoman2042.vercel.app/dlttoy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Toy deleted successfully");
              const remaining = myToys.filter((toys) => toys._id !== id);
              setMyToys(remaining);
            }
          })
          .catch((error) => {
            console.error("Error deleting toy:", error);
          });
      }
    });
  };
  


  

  return (
    <div >
      <h2 className="mb-20 text-5xl font-bold text-center mt-36 ">My Toys</h2>
      <div className="overflow-x-auto w-[90%] mx-auto  bg-gray-50 dark:bg-gray-700 dark:text-gray-400  ">
      
      <Table hoverable={true}>
        <Table.Head >
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>price</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>rating</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Delete</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {myToys.map((toy) => (
            <MyToysRow
              key={toy._id}
              toy={toy}
              handleDelete={handleDelete}
            ></MyToysRow>
          ))}
        </Table.Body>
      </Table>
    </div>  
    </div>
  );
};

export default MyToy;
