import image from "../assets/about.png";

const About = () => {
  return (
    <div className="px-4 py-12 bg-white md:px-12">
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        <div className="md:w-1/2 md:pr-8">
          <img src={image} alt="About Me" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-6xl text-primary">
            About Me
          </h2>
          <p className="mb-4 text-gray-600 italic">
          Dr Harsh Bardhan is one of the best general physicians in Noida. He provides treatment for all purposes with his best. Dr Harsh is also one of the best general physician doctor in Noida. Dr Harsh Bardhan who have 14 years of experience as a diabetologist and a doctor. He has also worked with many reputed hospitals like Ram Manohar Lohia, New Delhi. If you will read about him on google, you will find that the patient’s satisfaction rate and the recovery rate are very good. Dr Harsh Bardhan gives ample time to patients and diagnoses their diseases with ease and treats root causes with 100% satisfaction.
          </p>
          <p className="text-gray-600 italic">
          He is the best doctor for colds, fevers, bacterial diseases, viral diseases, typhoid, dengue, malaria, stress, sleep disorder, and anxiety. Dr Harsh Bardhan treat with 100% satisfaction to his patients. He also provides online video consultation facilities to patients, which is a very good thing. patients who can not visit his clinic consult him through video call. Dr Harsh’s team also take follow up on the patients, if any patients face any problem then they easily contact his team and Dr Harsh solves  their problem on time. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
