import { useEffect, useState } from "react";
import SingleToy from "../singleToyForTable/SingleToy";
import { Table } from "flowbite-react";
import UseTitle from "../title/UseTitle";

const AllToys = () => {
  const [allToys, setAllToys] = useState(null);
  // console.log(allToys);
  UseTitle('R-T|All-toys')
  
 console.log(allToys);
  useEffect(() => {
    const fetchToys = async () => {
      try {
        const response = await fetch(
          "https://robo-kit-toy-server-aalnoman2042.vercel.app/alltoys"
        );
        const data = await response.json();
        setAllToys(data);
      } catch (error) {
        console.log("Error fetching toys:", error);
      }
    };

    fetchToys();
  }, []);
  if(!allToys){
    return <div className="flex justify-center"><progress className="w-56 progress"></progress></div>
  }

  return (
  
        <div  className="my-36">
        <h2 className="my-3 text-5xl font-bold text-center">all Toys</h2>
          <div className=" w-[90%] mx-auto overflow-x-auto" >
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>price</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>rating</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {allToys.map((toy) => (
            <SingleToy key={toy._id} toy={toy}></SingleToy>
          ))}
        </Table.Body>
      </Table>
    </div>
      </div>
    
  );
};

export default AllToys;
