import axios from "axios";
import { toast } from "react-toastify";

const DeleteStoryButton = ({ id, email, refetch }) => {
  const handleDeleteStory = async () => {
    fetch(`http://localhost:3000/api/stories`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ id, email }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Result from backend", result);
        if (result?.deletedCount) {
          toast.success(`Delete Successful!`);
          refetch();
          // console.log(result)
        }
      });
  };

  return (
    <button className="hover:underline" onClick={handleDeleteStory}>
      Delete Story
    </button>
  );
};

export default DeleteStoryButton;
