import { useState } from 'react';
import './main-profile.css'

function Profile() {
  const [name, setName] = useState("Yermek");
  const [age, setAge] = useState(21);
  const [location, setLocation] = useState("Semei, KZ");
  const [bio, setBio] = useState("Radioactive");
  const [isEditing, setIsEditing] = useState(false);


  const handleEditClick = () => {
    setIsEditing(true);

  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

 

  return (
    <div className="profile">
      <h1>{name}</h1>
          <p>Age: {age}</p>
          <p>Location: {location}</p>
          <p>Bio: {bio}</p>
      {isEditing ? (
        <div>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Age:
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          </label>

          <label>
            Bio:
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
          </label>
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )}
    </div>
  );
}

export default Profile;