import { FaAngleLeft } from "react-icons/fa6";

import { Link } from "react-router-dom";

const PageHeader = () => {
  return (
    <Link to="/task" className="flex items-center gap-2">
      <FaAngleLeft className="text-3xl md:text-[50px] text-[#292929]" />
      <h1 className="text-[#292929] font-medium text-3xl md:text-[50px] mr-200">
        New Task
      </h1>
    </Link>
  );
};

export default PageHeader;
