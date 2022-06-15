import { Button, FormTextArea } from "components";
import React, { useState } from "react";

const SharePost = () => {
  const [description, setDescription] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setDescription(e.target.value);
  return (
    <div className="p-5 rounded bg-primaryLight">
      <div className="flex mb-4">
        <div className="w-14 h-14 mr-3 rounded-full overflow-hidden">
          <img
            className="object-cover w-full"
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg"
            alt=""
          />
        </div>
        <div className="flex-1">
          <FormTextArea
            name="description"
            onChange={handleChange}
            value={description}
            placeholder="What's on your mind..."
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Button>Share Post</Button>
      </div>
    </div>
  );
};

export default SharePost;
