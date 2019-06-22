import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { FixedSizeGrid as Grid } from "react-window";

import "./style.css";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    // flexWrap: "wrap",
    justifyContent: "space-around"
    // overflow: "hidden",
    // backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 400
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  },
  card: {
    maxWidth: 340,
    // height: 1000,
    marginBottom: 20
  }
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
//  * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
// const PostContainer = props => {
//   const classes = useStyles();
//   const data = props.post;

//   return (
//     <div className={classes.root}>
//       <GridList
//         cellHeight={200}
//         cols={4}
//         spacing={4}
//         style={{ width: 1400, height: 1400 }}
//         // className={classes.gridList}
//       >
//         {data.map(tile => (
//           <Card className={classes.card}>
//             <CardActionArea>
//               <CardMedia
//                 component="img"
//                 alt="Contemplative Reptile"
//                 height="140"
//                 image={tile.media.m}
//                 title="Contemplative Reptile"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="h2">
//                   Lizard
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" component="p">
//                   Lizards are a widespread group of squamate reptiles, with over
//                   6,000 species, ranging across all continents except Antarctica
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//             <CardActions>
//               <Button size="small" color="primary">
//                 Share
//               </Button>
//               <Button size="small" color="primary">
//                 Learn More
//               </Button>
//             </CardActions>
//           </Card>
//         ))}
//       </GridList>
//     </div>
//   );
// };

const PostContainer = props => (
  <article className="card">
    <header className="card_thumb">
      <img
        src="https://cdn.arstechnica.net/wp-content/uploads/2017/10/Futurama-800x449.jpg"
        style={{ width: 400 }}
      />
    </header>
    <div className="card_date">
      <span className="card_date_day">12</span>
      <span className="card_date_month">May</span>
    </div>
    <div className="card_body">
      <div className="card_category">
        <a href="#">Photos</a>
      </div>
      <div className="card_title">
        <a href="#">Bender should not be allowed on tv</a>
      </div>
      <div className="card_subtitle">
        Head in tv is better than nothing we are champions
      </div>
      <p className="card_description">We tried everything</p>
    </div>
    <footer className="card_footer">
      <span className="icon icon--time">6 min</span>
      <span className="icon icon-comment">
        <a href="#">39 comments</a>
      </span>
    </footer>
  </article>
);

export default PostContainer;
