import FullStackImage from '../assets/portfolio.PNG';
// ۱. تصویر پروژه تیلویند را ایمپورت کنید (نام فایل و فرمت آن را با فایل خودتان هماهنگ کنید)
import TailwindProjectImage from '../assets/images/tailwind.png';

const portfolioData = [
  {
    title: 'Web Developer',
    items: [
      {
        id: 1,
        title: 'Full-Stack Developer for Kahroba Academy',
        description: 'Nursing education platform',
        image: FullStackImage,
      },
    ],
  },
  {
    title: 'Front-End / React & Tailwind',
    items: [
      {
        id: 2,
        title: 'React & Tailwind CSS Project',
        description: 'Responsive modern web application built with React and Tailwind CSS',
        image: TailwindProjectImage, // تصویر پروژه تیلویند
      },
    ],
  },
];

export default portfolioData;
