

const Gallery = () => {
    return (
     
        <div data-aos="zoom-in">
            <h1 className='text-5xl text-center my-9 '>Our Best Collection!!</h1>
            <div className="grid gap-4 w-[90%] mx-auto">
    <div>
        <img className="h-auto max-w-full mx-auto rounded-lg" src="https://img.freepik.com/premium-photo/robot-robot-are-standing-wooden-floor_782419-9870.jpg?w=900" alt=""/>
    </div>
    <div className="grid grid-cols-5 gap-4">
        <div>
            <img className="h-auto max-w-full duration-300 rounded-lg hover:scale-150" src="https://img.freepik.com/premium-photo/robot-is-looking-robot-with-bug-its-nose_782419-9911.jpg?w=900" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full duration-300 rounded-lg hover:scale-150" src="https://img.freepik.com/premium-photo/robot-rocket-are-sitting-table_782419-10049.jpg?w=900" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full duration-300 rounded-lg hover:scale-150" src="https://img.freepik.com/premium-photo/robot-with-gun-is-standing-small-robot_782419-10062.jpg?w=900" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full duration-300 rounded-lg hover:scale-150" src="https://img.freepik.com/premium-photo/robot-with-hole-it-that-says-robot-it_782419-9593.jpg?w=900" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full duration-300 rounded-lg hover:scale-150" src="https://img.freepik.com/premium-photo/kids-creating-robots-with-teacher-early-development-diy-innovation-modern-technology_109285-2159.jpg?w=900" alt=""/>
        </div>
    </div>
</div>
        </div>

    );
};

export default Gallery;