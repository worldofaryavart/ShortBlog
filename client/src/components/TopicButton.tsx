
const topics = ['pets', 'ai', 'robotics'];

const TopicButton: React.FC = () => {

    

  return (
    <>
      {topics.map((topic, index) => (
        <button
          key={index}
          className={`
            rounded-full 
            px-3 
            py-1 
            text-xs 
            font-semibold 
            transition-colors 
            duration-200
            mr-2
            bg-gray-200 bg-opacity-50
            text-gray-800
            border border-gray-300
            shadow-[1px_1px_3px_0px_rgba(0,0,0,0.1)]
            hover:bg-gray-300 hover:bg-opacity-70
          `}
        >
          {topic}+
        </button>
      ))}
    </>
  );
};

export default TopicButton;