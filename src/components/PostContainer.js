import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { Grid } from "semantic-ui-react";
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

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  }
}));

const PostContainer = props => {
  const posts = props.post;
  console.log("recebendo", posts);

  return (
    <Grid stackable columns={4}>
      {posts.map(post => {
        return (
          <Grid.Column key={post.author_id}>
            <article className="card">
              <header className="card_thumb">
                <img src={post.media.m} style={{ width: 520 }} />
              </header>
              <div className="card_date">
                <span className="card_date_day">12</span>
                <span className="card_date_month">May</span>
              </div>
              <div className="card_body">
                <div className="card_category">Photos</div>
                <div className="card_title">
                  Bender should not be allowed on tv
                </div>
                <div className="card_subtitle">
                  Head in tv is better than nothing we are champions
                </div>
                <p className="card_description">
                  We tried everything We tried everythingWe tried everythingWe
                  tried everythingWe tried everythingWe tried everythingWe tried
                  everythingWe tried everythingWe tried everythingWe tried
                  everythingWe tried everythingWe tried everythingWe tried
                  everythingWe tried everythingWe tried everythingWe tried
                  everythingWe tried everythingWe tried
                </p>
              </div>
              <footer className="card_footer">
                <span className="icon icon--time">6 min</span>
                <span className="icon icon-comment">
                  <a href="#">39 comments</a>
                </span>
              </footer>
            </article>
          </Grid.Column>
        );
      })}
    </Grid>
  );

  {
    /* {this.state.columns.map(
      data =>
        data.label !== " " && (
          <Grid.Column key={data.key}>
            <Field
              name={data.key}
              component={fields.field.checkbox}
              label={data.label}
              type="checkbox"
              control={Checkbox}
            />
          </Grid.Column>
        )
    )}
  </Grid>; */
  }

  {
    /* return (
    <GridList cellHeight={160} spacing={4} cols={4}>
      {posts.map(post => {
        return (
          <article className="card">
            <header className="card_thumb">
              <img src={post.media.m} style={{ width: 520 }} />
            </header>
            <div className="card_date">
              <span className="card_date_day">12</span>
              <span className="card_date_month">May</span>
            </div>
            <div className="card_body">
              <div className="card_category">Photos</div>
              <div className="card_title">
                Bender should not be allowed on tv
              </div>
              <div className="card_subtitle">
                Head in tv is better than nothing we are champions
              </div>
              <p className="card_description">
                We tried everything We tried everythingWe tried everythingWe
                tried everythingWe tried everythingWe tried everythingWe tried
                everythingWe tried everythingWe tried everythingWe tried
                everythingWe tried everythingWe tried everythingWe tried
                everythingWe tried everythingWe tried everythingWe tried
                everythingWe tried everythingWe tried
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
      })}
    </GridList> */
  }
};

export default PostContainer;
