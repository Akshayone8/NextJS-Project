"use server";
import { revalidatePath } from "next/cache";
import { Post } from "./models";
import connectToDb from "./utils";

export const addPost = async (formData) => {
  //you can learn what is Object.fromEntries()
  const { title, desc, slug, userId } = Object.fromEntries(formData);
  console.log(title, desc, slug, userId);

  try {
    connectToDb(); //connecting to db
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    console.log("save to db");
    revalidatePath("/blog"); //as in the devlopment mode it won't cache so if any data added wont be shown immedately so by using this it will show immediately (basically shows us a fresh data)
  } catch (err) {
    console.log("something went wrong");
  }
};

export const deletePost = async (formData) => {
  //you can learn what is Object.fromEntries()
  const { id } = Object.fromEntries(formData); //id is nothing but we are getting from mongodb

  try {
    connectToDb(); //connecting to db

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog"); //as in the devlopment mode it won't cache so if any data added wont be shown immedately so by using this it will show immediately (basically shows us a fresh data)
  } catch (err) {
    console.log("something went wrong");
  }
};
