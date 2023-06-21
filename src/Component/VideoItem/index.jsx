import { WatchLater , CheckCircle } from "@mui/icons-material";
import { Card, Typography, CardMedia, CardContent, Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function VideoItem(props) {
  const { video } = props;
  const { videoId, title, thumbnails, author } = video;
  const { badges } = author;
  const dispatch =useDispatch()

  return (
    <>
      <Card
        sx={{
          width: { xs: "70%", sm: "310px", md: "400px" },
          boxShadow: "none",
          borderRadius: 0,
        }}
      >
        <Link>
          <CardMedia
            image={thumbnails && thumbnails[0] && thumbnails[0].url}
            alt={title}
            sx={{
              width: { xs: "100%", sm: "100%" },
              height: 250,
            }}
          />
        </Link>

        <CardContent>
          <Link to={`/video/${videoId}`}>
            <Typography
              variant="subtitle1"
              fontWeight={"bold"}
              color="#000"
              style={{
                width: "50%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {title}
            </Typography>
          </Link>
          <Box display="flex" alignItems={"center"}>
            <Typography
              variant="subtitle2"
              color="grey"
              style={{
                flex: 1
              }}
            >
              {author.title}
              {
                badges && badges[0] && badges[0].type === 'OFFICIAL_ARTIST_CHANNEL' &&
                <CheckCircle 
                  sx={{
                    color:'grey',
                    ml:'5px'
                  }}
                />
              }
            </Typography>
            <IconButton 
            size='small'
            style={{
                cursor:'pointer'
            }}
            onClick={() =>dispatch(addToWatchLaterVideos(video))}
            
            >
                <WatchLater  color="#f2f2f2"/>
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
