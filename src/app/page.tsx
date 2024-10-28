import Courses from "@/Components/Home/Courses";
import Fewwords from "@/Components/Home/Fewwords";
import Quality from "@/Components/Home/Quality";
import Slider from "@/Components/Home/Slider";

export default function page() {
  return (
    <>
      <div>
        <Slider />

        <Fewwords/>

        <Quality/>
        <Courses/>
        <div className="h-52">
          
        </div>
        
      </div>
    </>
  );
}
