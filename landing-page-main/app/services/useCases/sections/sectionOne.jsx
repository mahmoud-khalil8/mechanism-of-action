import React from 'react';
import Image from "next/image";


function SectionOne() {
  return (
    
<>
       
    <article className=" shadow-lg rounded-xl p-8 mb-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Introduction</h1>
        {/* <div className="text-gray-600 text-lg">
          <span className="mr-2">John Doe</span>
        </div> */}
      </header>
      <div className="text-gray-800 leading-relaxed text-lg">

        <p> • NSAIDs: Inhibit the enzyme cyclooxygenase (COX), thereby reducing the production of inflammatory prostaglandins.</p>
        <p>• Corticosteroids: Suppress the immune response and decrease inflammation by inhibiting the production of inflammatory cytokines.</p>
        <p> •Immunosuppressants: Suppress the immune system's activity to reduce inflammation, commonly used in autoimmune diseases.</p>
      </div>
      <br></br>
      <div className="text-gray-800 leading-relaxed text-lg">

        <p> The chief drugs used to treat inflammation may (somewhat arbitrarily) be divided into three major groups: </p>
        <p>•Drugs that	inhibit the cyclooxygenase enzyme—the	nonsteroidal antiinflammatory drugs	(NSAIDs) and the coxibs.</p>
        <p>•Anti-rheumatoid drugs the disease-modifying antirheumatic drugs (DMARDs)	including some immunosuppressants.</p>
        <p>•The new anticytokine,	and other biological agents.</p>
      </div>
      <br />
      <br />
      <br />
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">MOAs</h1>
        {/* <div className="text-gray-600 text-lg">
          <span className="mr-2">John Doe</span>
        </div> */}
      </header>
      <div className="flex gap-4">
      <div className="rounded-lg border p-6  max-w-sm">
        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-950">
          <p className="text-sm font-semibold leading-none ">
              Rheumatoid arthritis, inflammatory bowel diseases (Crohn's disease, ulcerative colitis), psoriasis, asthma.          </p>
        </div>
      </div>
      <div className="rounded-lg border p-6 max-w-sm">
        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-950">
          <p className="text-sm font-semibold leading-none">Examples: Ibuprofen, aspirin, prednisone, dexamethasone.</p>
        </div>
      </div>
    </div>
    <br />
      <div className="text-gray-800 leading-relaxed text-lg">
        
        <p> 1.&nbsp;&nbsp;acetylcholine_receptor_antagonist
          <br></br>
            2.&nbsp;&nbsp;adenosine_receptor_agonist<br></br>
            3.&nbsp;&nbsp;adenosine_receptor_antagonist<br></br>
            4.&nbsp;&nbsp;adrenergic_receptor_antagonist<br></br>
            5.&nbsp;&nbsp;glucocorticoid_receptor_agonist<br></br>
            6.&nbsp;&nbsp;histamine_receptor_antagonist<br></br>
            7.&nbsp;&nbsp;leukotriene_inhibitor<br></br>
            8.&nbsp;&nbsp;nitric_oxide_production_inhibitor<br></br>
            9.&nbsp;&nbsp;prostaglandin_inhibitor<br></br>
            10.&nbsp;&nbsp;tnf_inhibitor<br></br>
          </p>
      </div>
      <br />
      <br />
      <br />
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Anti-inflammatory diseases</h1>
        {/* <div className="text-gray-600 text-lg">
          <span className="mr-2">John Doe</span>
        </div> */}
      </header>
    <br />
      <div className="text-gray-800 leading-relaxed text-lg">
        
              <div className="text-gray-800 leading-relaxed text-lg">
        
        <p> •Rheumatoid arthritis: An autoimmune disorder characterized by chronic inflammation in the joints, leading to pain, swelling, and stiffness.</p>
        <p>•Osteoarthritis: A degenerative joint disease characterized by the breakdown of joint cartilage and underlying bone, often resulting in pain and stiffness.</p>
        <p>•Inflammatory bowel disease (IBD): Includes Crohn's disease and ulcerative colitis, chronic inflammatory conditions affecting the gastrointestinal tract, leading to symptoms such as abdominal pain, diarrhea, and rectal bleeding.</p>
        <p>•Asthma: A chronic respiratory condition characterized by airway inflammation, bronchoconstriction, and airflow obstruction, resulting in symptoms like wheezing, coughing, and shortness of breath.</p>
       </div>
       <br />
       
       <div className="grid md:grid-cols-2 md:gap-6">
      <div className="border bg-gray-100 dark:bg-gray-950 p-4 rounded-lg space-y-4 mr-2">
        <h3 className="text-lg font-bold">Most Dangerous</h3>
        <p className="text-sm text-black leading-normal">
          • Inflammatory bowel disease (IBD): While rheumatoid arthritis and asthma can significantly impact quality of life and lead to complications, severe forms of IBD, particularly Crohn's disease, can lead to life-threatening complications such as bowel perforation, severe bleeding, and increased risk of colorectal cancer.
        </p>
      </div>
      <div className="border  rounded-lg  bg-gray-100 dark:bg-gray-950 p-4 space-y-4 ">
        <h3 className="text-lg font-bold">Most Widespread</h3>
        <p className="text-sm text-black leading-normal">
          • Osteoarthritis: This degenerative joint disease is one of the most common forms of arthritis, affecting millions of people worldwide, especially older adults. It primarily affects weight-bearing joints such as the knees, hips, and spine.
        </p>
      </div>
    </div>
       </div>
       <br />
      <br />
            <h2  className="text-lg font-semibold leading-none">
              Examples of where finding effective treatments or cures presents significant challenges:
            </h2>
 
        <br />
        <div className="text-gray-800 leading-relaxed text-lg">
         <p>• Systemic lupus erythematosus (SLE): Lupus is a complex autoimmune disease that can affect multiple organs and systems in the body, leading to a wide range of symptoms such as joint pain, skin rashes, fatigue, and organ damage. Finding effective treatments for lupus is challenging due to its heterogeneity, unpredictable course, and poorly understood underlying mechanisms. While various medications, including corticosteroids, immunosuppressants, and biologic agents, can help manage symptoms and reduce disease activity, there is no cure for lupus, and treatment often involves a trial-and-error approach to find the most suitable therapy for each individual.</p>
        </div>

    </article>
</>
  );
}

export default SectionOne;
