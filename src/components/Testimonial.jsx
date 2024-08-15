import Heading from "./Heading";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <section className="px-4 py-12 mt-10 bg-bg-shade md:px-12">
      <div className="container mx-auto">
        <Heading title="Testimonials" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            quote="Dr. Harsh Bardhan has been instrumental in helping my father manage his blood sugar levels. His expertise have made a significant difference in my father's health. We highly recommend Dr. Harsh Bardhan for his dedication and professionalism."
            author="Abhishek Kumar"
            position="Patient"
          />
          <TestimonialCard
            quote="I recently consulted Dr. Harsh Bardhan for complications related to my diabetes. His expertise and dedication were immediately evident. Dr. Bardhan carefully explained my condition and the necessary steps to manage it, always ensuring I understood the treatment plan.
His personalized approach and commitment to my well-being made a huge difference. Thanks to Dr. Bardhan, my diabetes is now well-managed, and I feel much healthier."
            author="Parvez Khan"
            position="Patient"
          />
          <TestimonialCard
            quote="Doctor Harsh Bardhan is God to Diabetics patients, i am taking treatment and within two weeks my sugar level was get in control and now i am keeping continuous and monitoring by Doctor Harsh Bardhan."
            author="Harendra Singh"
            position="Patient"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
