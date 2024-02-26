const DeleteStoryButton = ({ id, email }) => {

  const handleDeleteStory = () => {

    fetch("http://localhost:3000/api/stories", {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({id,email}),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log("Result from backend", result);
          if (result?.deletedCount) {
            alert("Story  Delete success");
            console.log(result)
          }
        });

    console.log("deleted story id and email", id, email);

  };


  return (
    <button className="hover:underline" onClick={handleDeleteStory}>
      Delete Story
    </button>
  );
};

export default DeleteStoryButton;
