interface HomeSlideProps {
    text: string;
    color: string; 
  }
  export default function HomeSlide({ text, color }: HomeSlideProps) {

    return (
      <div className={`${color} w-full h-[50vh] min-h-[400px] flex items-center justify-center px-5`}>
        <p className="text-2xl text-gray-800">{text}</p>
      </div>
    );
  }