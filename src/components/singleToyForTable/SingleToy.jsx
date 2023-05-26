import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

const SingleToy = ({ toy }) => {
  const { _id,name, price, subcategory, rating } = toy;
  console.log(toy);

  return (
 
     <Table.Row className="bg-white hover:text-white hover:bg-gray-500"data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
      <Table.Cell className="text-xl font-semibold whitespace-nowrap ">
        {name}
      </Table.Cell>
      <Table.Cell>${price}</Table.Cell>
      <Table.Cell>{subcategory}</Table.Cell>
      <Table.Cell>{rating}</Table.Cell>
      <Table.Cell>
    <Link to={`/singletoy/${_id}`}>      <button className="btn btn-outline">Details</button></Link>
      </Table.Cell>
    </Table.Row>

  );
};

export default SingleToy;
