import { useEffect, useState } from "react";
import "./App.css";
import { Auth } from "./components/auth";
import { db, auth } from "./config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
function App() {
  const [animeList, setAnimeList] = useState([]);
  const [newAnimeTitle, setNewAnimeTitle] = useState("");
  const [newReleaseDate, setReleaseDate] = useState(0);
  const [isReceiveAward, setIsReceiveAward] = useState(false);
  const [updataAward, setUpdateAward] = useState(false);

  const animeCollectionRef = collection(db, "anime");
  const getAnimeList = async () => {
    //Read data from db
    try {
      const data = await getDocs(animeCollectionRef);
      const filterData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setAnimeList(filterData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAnimeList();
  }, []);
  const onSubmitAnime = async () => {
    try {
      await addDoc(animeCollectionRef, {
        title: newAnimeTitle,
        releaseDate: newReleaseDate,
        receiveAward: isReceiveAward,
        userId: auth?.currentUser?.uid,
      });
      getAnimeList();
    } catch (err) {
      console.log(err);
    }
  };
  const deleteAnime = async (id) => {
    const animeDoc = doc(db, "anime", id);
    await deleteDoc(animeDoc);
    getAnimeList();
  };
  const chagneStatus = async (id) => {
    const animeDoc = doc(db, "anime", id);
    await updateDoc(animeDoc, { receiveAward: updataAward });
    getAnimeList();
  };
  return (
    <>
      <div>
        <Auth />
        <div>
          <input
            placeholder="Anime title"
            onChange={(e) => setNewAnimeTitle(e.target.value)}
          />
          <input
            placeholder="Release date"
            type="number"
            onChange={(e) => setReleaseDate(Number(e.target.value))}
          />
          <input
            type="checkbox"
            checked={isReceiveAward}
            onChange={(e) => {
              setIsReceiveAward(e.target.checked);
            }}
          />
          <label>Recieve Award</label>
          <button onClick={onSubmitAnime}>Submit Anime</button>
        </div>
        <div>
          {animeList.map((anime) => (
            <div key="id">
              <h2 style={{ color: anime.receiveAward ? "green" : "red" }}>
                {anime.title}
              </h2>
              <p>Date: {anime.releaseDate}</p>
              <button onClick={() => deleteAnime(anime.id)}>
                Delete Anime
              </button>
              <input
                type="checkbox"
                checked={updataAward}
                onChange={(e) => {
                  setUpdateAward(e.target.checked);
                }}
              />
              <button onClick={() => chagneStatus(anime.id)}>
                Update Status
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
