import React, { useEffect, useState } from "react";
import axios from "axios";

function ProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
        setEditedName(res.data.name);
        setEditedEmail(res.data.email);
      } catch (err) {
        console.error("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchUser();
    else setLoading(false);
  }, [token]);

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("name", editedName);
    formData.append("email", editedEmail);
    if (imageFile) formData.append("image", imageFile);

    try {
      const res = await axios.put(
        "http://localhost:5000/api/auth/update",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setUser(res.data);
      setEditMode(false);
    } catch (err) {
      console.error("Update error:", err);
      alert("Could not update profile.");
    }
  };

  if (loading)
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</p>;

  if (!user)
    return (
      <p style={{ textAlign: "center", marginTop: "2rem" }}>
        Please log in to view your profile.
      </p>
    );

  return (
    <main
      style={{
        maxWidth: "600px",
        margin: "2rem auto",
        background: "#fff",
        borderRadius: "16px",
        padding: "2rem",
        boxShadow: "0 2px 12px #c2491420",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#c24914", fontFamily: "'Fredoka One', cursive" }}>
        My Profile
      </h2>

      {user.image && (
        <img
          src={
            imageFile
              ? URL.createObjectURL(imageFile)
              : `http://localhost:5000/uploads/${user.image}`
          }
          alt="Profile"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "1rem",
          }}
        />
      )}

      {editMode ? (
        <>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            style={{
              padding: "0.5rem",
              borderRadius: "10px",
              marginBottom: "1rem",
              width: "100%",
            }}
          />
          <input
            type="email"
            value={editedEmail}
            onChange={(e) => setEditedEmail(e.target.value)}
            style={{
              padding: "0.5rem",
              borderRadius: "10px",
              marginBottom: "1rem",
              width: "100%",
            }}
          />
          <input type="file" onChange={handleImageChange} />
          <br />
          <button
            style={{
              marginTop: "1rem",
              padding: "0.5rem 1.5rem",
              borderRadius: "12px",
              background: "#c24914",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
            onClick={handleSave}
          >
            Save Profile
          </button>
        </>
      ) : (
        <>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <button
            style={{
              marginTop: "1rem",
              padding: "0.5rem 1.5rem",
              borderRadius: "12px",
              background: "#c24914",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setEditMode(true)}
          >
            Edit Profile
          </button>
        </>
      )}
    </main>
  );
}

export default ProfilePage;
