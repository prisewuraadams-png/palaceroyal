import Image from "next/image";
import { Quote } from "lucide-react";

export default function CEOMessage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          {/* CEO Photo */}
          <div className="relative mx-auto w-full max-w-md">

            {/* Gold frame */}
            <div className="absolute -left-5 -top-5 h-full w-full rounded-[36px] border-2 border-[#D4AF37]" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] bg-[#F4F1EE]">
              <Image
                src="/images/news/BMA.jpg"
                alt="Chief Executive Officer of Palace Royal International School"
                fill
                className="object-cover"
              />
            </div>

          </div>

          {/* CEO Message */}
          <div>

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6D0F2C]">
              Message from the CEO
            </p>

            <div className="mt-4 h-1 w-20 rounded-full bg-[#D4AF37]" />

            <Quote
              size={46}
              className="mt-8 text-[#D4AF37]"
            />

            <h2 className="mt-5 text-4xl font-black leading-tight text-[#3A0817] md:text-5xl">
              Every Child Has a Future Worth Building.
            </h2>

            <div className="mt-7 space-y-5 text-lg leading-8 text-gray-600">

              <p>
                At Palace Royal International School, we believe that education goes beyond academic achievement. Our mission is to nurture well-rounded individuals who are grounded in faith, equipped with knowledge, and inspired to pursue excellence in all aspects of life.

We are committed to building not only brilliant minds but also strong character and moral integrity. 
As a Christian-based international school, we provide an environment where children are nurtured in Christ, guided by values, and empowered to discover and develop their unique gifts and potential.

Our policies, procedures, and operational frameworks are carefully designed to ensure professionalism,
 clarity, and consistency across all areas of the school. </p>

 <p>
 They reflect our dedication to high educational standards, effective leadership, and a 
 culture of accountability and excellence.

By aligning our practices with national requirements and international best practices, 
we ensure that every child receives a globally relevant and future-ready education.</p>

<p>
    
At Palace Royal International School, we foster a culture of collaboration among staff, parents, and partners.
 We believe education is a shared responsibility, and through unity of purpose, we create a nurturing environment 
 where every child can thrive academically, socially, emotionally, and spiritually.

As a leadership team, we remain committed to continuous improvement, innovation, and service. 
Our ultimate goal is to raise confident, disciplined, and globally minded students 
who will make a positive impact in their communities and the world.</p>


            
            </div>

            {/* Signature */}
            <div className="mt-10">
              <p className="text-xl font-bold text-[#3A0817]">
                Rev. Dr Bernard Mensa Adams
              </p>

              <p className="mt-1 text-sm text-[#6D0F2C]">
                Chief Executive Officer
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}