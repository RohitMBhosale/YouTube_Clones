import {
  FitnessCenter,
  Home,
  Movie,
  MusicNote,
  Newspaper,
  School,
  SportsEsports,
  TheaterComedy,
  TrendingUp,
  WatchLater,
} from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { currentSelectedCategory } from "../../Store/action";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const categoryItems = [
  {
    name: "Home",
    icon: <Home />,
    id: "home",
  },
  {
    name: "Watch Later",
    icon: <WatchLater />,
    id: "watchLater",
  },
  {
    name: "Explore",
    id: "explore",
  },
  {
    name: "New",
    icon: <Home/>,
    id: "trending",
  },
  {
    name: "Trending",
    icon: <TrendingUp />,
    id: "trending",
  },
  {
    name: " Music",
    icon: <MusicNote />,
    id: "music",
  },
  {
    name: " Movie",
    icon: <Movie />,
    id: "movie",
  },
  {
    name: "Gaming",
    icon: <SportsEsports />,
    id: "gaming",
  },
  {
    name: "Sports",
    icon: <FitnessCenter />,
    id: "sport",
  },
  {
    name: "Comedy",
    icon: <TheaterComedy />,
    id: "comedy",
  },
  {
    name: "News",
    icon: <Newspaper />,
    id: "news",
  },
  {
    name: "Education",
    icon: <School />,
    id: "education",
  },
];

export default function SideBar() {
 const dispatch = useDispatch()
 const navigate = useNavigate()
 const {currentCategoryValue} = useSelector(state=>state)

console.log(currentCategoryValue);


function handleCurrentCategorySelect(getCurrentId){
    dispatch(currentSelectedCategory(getCurrentId))

    if(getCurrentId === 'watchLater'){
      navigate('/watch-later')
    }else{
      navigate('/')
    }
}


  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          overflow: "auto",
          height: { sx: "auto", md: "90%" },
          flexDirection: { md: "column" },
        }}
      >
        {categoryItems.map((item) =>
          item.id === "explore" ? (
            <Typography
              varient="subtitle1"
              fontWeight={"bold"}
              color="#000"
              padding={"20px 0px 20px 15px"}
            >
              {item.name}
            </Typography>
          ) : (
            <button onClick={() =>handleCurrentCategorySelect(item.id)} className="category_btn ">
              <span
                style={{
                  color: "#000",
                  marginRight: "15px",
                }}
              >
                {item.icon}
              </span>
              <span>{item.name}</span>
            </button>
          )
        )}
      </Stack>
    </>
  );
}
