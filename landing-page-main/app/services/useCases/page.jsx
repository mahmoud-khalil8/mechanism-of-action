"use client"
import { useState } from "react";
import SectionOne from "./sections/sectionOne";
import SectionTwo from "./sections/sectionTwo";
import SectionThree from "./sections/sectionThree";
import SectionFour from "./sections/sectionFour";
import SectionFive from "./sections/sectionFive";
import SectionSix from "./sections/sectionSix";
import SectionSeven from "./sections/sectionSeven";
import SectionEight from "./sections/sectionEight";
import SectionNine from "./sections/sectionNine";
import SectionTen from "./sections/sectionTen";
import styles from './dataPage.module.css'

function Sidebar() {
  const [selectedContent, setSelectedContent] = useState("sectionOne");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // New state for sidebar collapse

  const handleContentChange = (contentId) => {
    setSelectedContent(contentId);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };
  return (
    <div className="flex min-h-screen w-full">
                  {!isSidebarCollapsed && (
        <div className="border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-4 text-sm font-medium">

              <a
                className={`flex items-center gap-3 rounded-lg border mb-10 px-10 py-2 dark:text-white text-gray-900 transition-all ${styles.link} ${selectedContent === 'sectionOne' ? styles.selected : ''}`}
                href="#"
                onClick={() => handleContentChange("sectionOne")}
              >
                 Anti-inflammatory
              </a>
                <a
                  className={`flex items-center gap-3 rounded-lg border mb-10 px-10 py-2 dark:text-white text-gray-900 transition-all ${styles.link} ${selectedContent === 'sectionTwo' ? styles.selected : ''}`}
                  href="#"
                  onClick={() => handleContentChange("sectionTwo")}
                >
                Antibiotic/Antiviral/Antifungal
              </a>
              <a
                className={`flex items-center gap-3   rounded-lg px-10 border mb-10 py-2 dark:text-white text-gray-900 transition-all ${styles.link} ${selectedContent === 'sectionThree' ? styles.selected : ''}`}
                href="#"
                onClick={() => handleContentChange("sectionThree")}
              >
                Antineoplastic/Anticancer 
              </a>
              <a
                className={`flex items-center gap-3 rounded-lg px-10 py-2 border mb-10 dark:text-white text-gray-900 transition-all ${styles.link} ${selectedContent === 'sectionFour' ? styles.selected : ''}`}
                href="#"
                onClick={() => handleContentChange("sectionFour")}
              >
                   Neurological Agents
              </a>
              <a
                className={`flex items-center gap-3 rounded-lg px-10 py-2 border mb-10 dark:text-white text-gray-900 transition-all ${styles.link} ${selectedContent === 'sectionFive' ? styles.selected : ''}`}
                href="#"
                onClick={() => handleContentChange("sectionFive")}
              >
                 Cardiovascular Agents
              </a>
              <a
                className={`flex items-center gap-3 rounded-lg px-10 py-2 border mb-10 dark:text-white text-gray-900 transition-all ${styles.link} ${selectedContent === 'sectionSix' ? styles.selected : ''}`}
                href="#"
                onClick={() => handleContentChange("sectionSix")}
              >
                 Endocrine Agents
              </a>
              <a
                className={`flex items-center gap-3 rounded-lg px-10 py-2 border mb-10 dark:text-white text-gray-900 transition-all ${styles.link} ${selectedContent === 'sectionSeven' ? styles.selected : ''}`}
                href="#"
                onClick={() => handleContentChange("sectionSeven")}
              >
                 Immunomodulators
              </a>
              <a
                className={`flex items-center gap-3 rounded-lg px-10 py-2 border mb-10 dark:text-white text-gray-900 transition-all ${styles.link} ${selectedContent === 'sectionEight' ? styles.selected : ''}`}
                href="#"
                onClick={() => handleContentChange("sectionEight")}
              >
                 Analgesics/Anesthetics
              </a>
              <a
                className={`flex items-center gap-3 rounded-lg px-10 py-2 border mb-10 dark:text-white text-gray-900 transition-all ${styles.link} ${selectedContent === 'sectionNine' ? styles.selected : ''}`}
                href="#"
                onClick={() => handleContentChange("sectionNine")}
              >
                 Gastrointestinal Agents
              </a>
              <a
                className={`flex items-center gap-3 rounded-lg px-10 py-2 border mb-10 dark:text-white text-gray-900 transition-all ${styles.link} ${selectedContent === 'sectionTen' ? styles.selected : ''}`}
                href="#"
                onClick={() => handleContentChange("sectionTen")}
              >
                 Respiratory Agents
              </a>
            </nav>
            </div>
          </div>
        </div>
      )}
       <button
        className="lg:hidden bg-gray-100 dark:bg-gray-800 px-3 py-1 fixed bottom-4 right-4 rounded-full shadow-lg z-10"
        onClick={toggleSidebar}
      >
        {isSidebarCollapsed ? "Use Client" : "Collapse"}
      </button>

      <div className="flex flex-col flex-1">
        <header className="flex h-14 items-center gap-4 border-b border-gray-300 dark:border-gray-700 bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <nav className="hidden lg:flex lg:flex-row lg:items-center lg:gap-3 lg:ml-auto">
                {/* Header navigation */}
          </nav>
        </header>
        <main className={`flex-1 grid min-h-[calc(100vh - 1rem)]  gap-4 p-4 md:grid-cols-[250px_1fr] md:gap-6 lg:gap-8 md:p-6 ${styles['main-content']}`}> {/* Content based on selection */}  
          <div className="overflow-auto">
            {selectedContent === "sectionOne" && <SectionOne />}
            {selectedContent === "sectionTwo" && <SectionTwo />}
            {selectedContent === "sectionThree" && <SectionThree />}
            {selectedContent === "sectionFour" && <SectionFour />}
            {selectedContent === "sectionFive" && <SectionFive />}
            {selectedContent === "sectionSix" && <SectionSix />}
            {selectedContent === "sectionSeven" && <SectionSeven />}
            {selectedContent === "sectionEight" && <SectionEight />}
            {selectedContent === "sectionNine" && <SectionNine />}
            {selectedContent === "sectionTen" && <SectionTen />}
            {/* Add rendering logic for other sections */}
          </div>

        </main>
      </div>
    </div>
  );
}

export default Sidebar;
