import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function ManagePost() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    document.title = "Manage Posts";
    getData();
  }, []);

  // axios
  //   .get("https://jsonplaceholder.typicode.com/posts")
  //   .then((res) => {
  //     console.log(res.data); // response data
  //     setPosts(res.data);
  //   })
  //   .catch((err) => {
  //     console.error("Error:", err);
  //   });

  // ✅ Use async/await for cleaner syntax
  async function getData() {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }

  const handleDelete = (id: number) => {
    console.log(id + " Confirm delete");
    // later you can add actual delete API call here
  };

  return (
    <>
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
          <h4 className="fw-bold mb-3 mb-md-0">
            <span className="text-muted fw-light">Posts / </span> Manage
          </h4>
          <Link to="/create/post" className="btn btn-primary">
            Add New Post
          </Link>
        </div>

        <div className="card">
          <div className="table-responsive">
            <table className="table table-bordered text-wrap">
              <thead className="table-light">
                <tr>
                  <th>User ID</th>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Body</th>
                  <th>Actions</th>
                </tr>
              </thead>

              {/* ✅ Correct tbody */}
              <tbody>
                {posts.map((item) => (
                  <tr key={item.id}>
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                    <td className="d-flex gap-1">
                      <button className="btn btn-icon btn-outline-primary">
                        <span className="tf-icons bx bx-search"></span>
                      </button>
                      <button className="btn btn-icon btn-outline-primary">
                        <span className="tf-icons bx bx-edit"></span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-icon btn-outline-danger"
                        onClick={() => {
                          if (
                            confirm(
                              "Are you sure you want to delete this post?"
                            )
                          ) {
                            handleDelete(item.id);
                          }
                        }}
                      >
                        <i className="bx bx-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManagePost;
