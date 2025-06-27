import { useState } from 'react';

const certifications = [
  { file: 'iitmshashanka.pdf', title: 'Data Science IITM' },
  { file: 'Coursera H4PH005TWSVE.pdf', title: 'Cloud Computing' },
  { file: 'Coursera FEU5HBQZ50X3.pdf', title: 'Automating Cybersecurity' },
  { file: 'Coursera CZZ79N22DLSZ.pdf', title: 'Digital Marketing' },
  { file: 'Coursera 7HUS2Y95T1QK.pdf', title: 'Gen-AI' },
  { file: 'Coursera NIPDKG0CAK6E.pdf', title: 'SML' },
  { file: 'Coursera 5W7Q87861KTY.pdf', title: 'SQL for Data' },
  { file: 'Coursera 4TX9XYH5SFEW.pdf', title: 'Data Analysis' },
  { file: 'Database Structures and Management with MySQL.pdf', title: 'MySQL Structures' },
  { file: 'GenAI and LLMs on AWS.pdf', title: 'GenAI on AWS' },
  { file: 'Quantum Computing For Everyone - An Introduction.pdf', title: 'Quantum Intro' },
  { file: 'Prepare Data for Exploration.pdf', title: 'Prepare Data' },
  { file: 'Data Science Foundations.pdf', title: 'Data Science Basics' },
  { file: 'Foundations of AI and Machine Learning.pdf', title: 'AI/ML Foundations' },
  { file: 'Advanced MySQL Topics .pdf', title: 'Advanced MySQL' },
  { file: 'Play It Safe_ Manage Security Risks .pdf', title: 'Security Risks' },
  { file: 'Data Analyst Career Guide and Interview Preparation.pdf', title: 'Analyst Career Guide' },
  
];

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="certifications" className="relative py-20 bg-gray-50 dark:bg-zinc-900 text-center">
      <h2 className="text-4xl font-bold mb-12">Certifications</h2>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* PDF Display */}
        <div className="md:col-span-3 h-[650px] overflow-hidden rounded-2xl shadow-2xl border dark:border-zinc-800 border-gray-300">
          <iframe
            src={`/certifications/${certifications[currentIndex].file}`}
            title={certifications[currentIndex].title}
            className="w-full h-full"
          />
        </div>

        {/* Scrollable Index */}
        <div className="h-[650px] overflow-y-auto rounded-lg shadow-inner bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 p-4">
          <ul className="space-y-3">
            {certifications.map((cert, index) => (
              <li key={index}>
                <button
                  onClick={() => setCurrentIndex(index)}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all
                    ${
                      index === currentIndex
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-zinc-700 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-zinc-600'
                    }`}
                >
                  {cert.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
