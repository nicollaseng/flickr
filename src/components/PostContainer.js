import React from "react";

import "./style.scss";

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
        src="https://www.minhaseriefavorita.com/wp-content/uploads/2018/06/futurama-ainda-e-produzido.jpg"
        style={{ width: 520 }}
      />
    </header>
    <div className="card_date">
      <span className="card_date_day">12</span>
      <span className="card_date_month">May</span>
    </div>
    <div className="card_body">
      <div className="card_category">Photos</div>
      <div className="card_title">Bender should not be allowed on tv</div>
      <div className="card_subtitle">
        Head in tv is better than nothing we are champions
      </div>
      <p className="card_description">
        We tried everything We tried everythingWe tried everythingWe tried
        everythingWe tried everythingWe tried everythingWe tried everythingWe
        tried everythingWe tried everythingWe tried everythingWe tried
        everythingWe tried everythingWe tried everythingWe tried everythingWe
        tried everythingWe tried everythingWe tried everythingWe tried
      </p>
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
