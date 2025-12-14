import profileImage from '../assets/profile.png';
import dockerCertif from '../assets/certificate/docker.png';
import xappProject from '../assets/portfolio/xApp.png';
import sdniotProject from '../assets/portfolio/sdniot.png';
import ccnaCertif from '../assets/certificate/ccna.jpg';
import dockerProject from '../assets/portfolio/docker.png';
import aiProject from '../assets/portfolio/ai.png';

export default {
    personalInfo: {
        name: "Siti Nurhayati Syafaningrum",
        role: "Telecommunication Engineering Student",
        bio: "Aspiring network engineer and developer utilizing technology to connect the world. Passionate about IoT, 5G, and Data.",
        image: profileImage,
        resumeLink: "https://drive.google.com/file/d/1kASD1hIQG_rFfKBPt8ABCNvC-tP1dLOd/view?usp=sharing",
        contact: {
            email: "ssyafaningrum@gmail.com",
            linkedin: "https://www.linkedin.com/in/siti-nurhayati-syafaningrum-b113931b0/",
            github: "https://github.com/syafaningrum",
        }
    },
    experiences: [
        {
            role: "Data Engineer Intern",
            company: "PT Telekomunikasi Seluler (Telkomsel)",
            date: "Jul 2025 - Aug 2025",
            description: "Optimized large-scale data queries from Hadoop clusters to serve multiple sub- directorates, enabling faster and more accurate business insights. Designed and developed a new “Tools” Page for Telkomsel’s internal web portal, delivering three productivity tools (PDF Splitter, PDF Merger, and Sentiment Analyzer) as a full-stack developer"
        },
        {
            role: "Researcher",
            company: "Adaptive Network Laboratory",
            date: "Apr 2024 - Present",
            description: "Engaged in an international research grant project titled \"Empowering IoT Networks with Open- Source SDN using Multi- Tenant Slicing via Ryu Controller and IoT-DLVisor.\" This research focuses on SDN architecture and IoT implementation using microservices-based Ryu and network slicing."
        },
        {
            role: "AI-Based Admission Forecasting",
            company: "Artificial Intelligence Learning and Optimization (AILO) Telkom University",
            date: "May 2025 - Jul 2025",
            description: "Collaborated in a university-led research project focused on forecasting student admissions for Telkom University from 2025 to 2030."
        }
    ],
    projects: [
        {
            title: "xApp on OpenRAN",
            description: "Create xApp for OpenRAN in simulation environment",
            techStack: ["Open5GS", "SRSRAN", "OpenAirInterface"],
            image: xappProject,
            link: "https://hackmd.io/@syafaa/OpenRAN/edit"
        },
        {
            title: "SDN IoT",
            description: "Empowering IoT Networks with Open- Source SDN using Multi- Tenant Slicing via Ryu Controller and IoT-DLVisor",
            techStack: ["Ryu Controller", "Raspberry Pi", "Flowvisor", "OpenFlow", "SDN"],
            image: sdniotProject,
            link: "https://www.canva.com/design/DAG7cwtaAl4/XpMnKISkJyNR_MdD9lZnOg/view?utm_content=DAG7cwtaAl4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbd4d82c3bd"
        },
        {
            title: "Docker Fundamental",
            description: "Learn Docker Fundamental",
            techStack: ["Docker", "Docker Compose", "Docker Hub"],
            image: dockerProject,
            link: "https://hackmd.io/@syafaa/Docker_Fundamental"
        },
        {
            title: "AI-Based Admission Forecasting",
            description: "Collaborated in a university-led application project focused on forecasting student admissions for Telkom University from 2025 to 2030.",
            techStack: ["Python", "Machine Learning", "TensorFlow", "Keras", "Scikit-learn"],
            image: aiProject,
            link: null
        }
    ],
    certificates: [
        {
            title: "CCNA: Introduction to Networks",
            issuer: "Cisco",
            date: "2023",
            link: "https://drive.google.com/file/d/1iZvxbbFW1svmDR785ubYJLE1HJ_RpceD/view?usp=drive_link",
            image: ccnaCertif
        },
        {
            title: "Docker Fundamental",
            issuer: "Adinusa",
            date: "2024",
            link: "https://drive.google.com/file/d/1iZvxbbFW1svmDR785ubYJLE1HJ_RpceD/view?usp=drive_link",
            image: dockerCertif
        }
    ]
};
