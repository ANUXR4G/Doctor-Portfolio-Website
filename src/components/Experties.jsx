import ExpertiseCard from "./ExpertiseCard";
import Heading from "./Heading";
import {
  FaStethoscope,
  FaMicroscope,
  FaUserMd,
  FaHandHoldingMedical,
} from "react-icons/fa";
import { FaVirusCovidSlash } from "react-icons/fa6";
import { AiFillMedicineBox } from "react-icons/ai";

const Experties = () => {
  return (
    <div className="px-4 py-12 bg-white md:px-12">
      <div className="container mx-auto">
        <Heading title="My Expertise" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ExpertiseCard
            icon={<FaUserMd className="text-4xl text-blue-500" />}
            title="Dengue"
            description="Dengue which is caused by mosquitoes could be a deadly disease if not get treatment on time. These are some  dengue symptoms  which you can identify Nausea, vomiting, aches and pain. The best doctor who could help you to save your life from this deadly disease."
          />
          <ExpertiseCard
            icon={<FaUserMd className="text-4xl text-red-500" />}
            title="Typhoid"
            description="Patients with typhoid also consult with doctor Harsh Bardhan and gets best result with days."
          />
          <ExpertiseCard
            icon={<FaVirusCovidSlash className="text-4xl text-green-500" />}
            title="Bacterial Disease"
            description="Dr Harsh also treats bacterial disease like food poisoning and pneumonia which are very common bacterial disease in our societies."
          />
          
        </div>

        {/* Second Row */}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-5">
          <ExpertiseCard
            icon={<FaHandHoldingMedical className="text-4xl text-violet-500" />}
            title="Viral Disease"
            description="When climate change viral disease also spread like Common Cold and Influenza that affects to large population, Dr harsh Bardhan gives best treatment for viral disease also."
          />
          <ExpertiseCard
            icon={<FaStethoscope className="text-4xl text-[#006b6a]" />}
            title="Anxiety & Sleep Disorder"
            description="Todays’s most of the population is affected with anxiety, there could be many reason for anxiety. People with anxiety could have many complications even sleep disorder or mentally disturbed."
          />
          <ExpertiseCard
            icon={<AiFillMedicineBox className="text-4xl text-orange-500" />}
            title="Sugar & Diabetes"
            description="Sugar & Diabetes indicates that the expertise covers conditions related to blood sugar levels and diabetes management. This is a common area of medical specialization, focusing on diagnosing, treating, and managing diabetes and related metabolic disorders. "
          />
         
        </div>

      </div>
    </div>
  );
};

export default Experties;
