import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, IconButton, Paper, Typography } from '@material-ui/core';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  mainthing: {
    padding: theme.spacing(0,0,3,0),
    fontSize: '1.8rem',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  thumbnail: {
    width: '120px',
    height: '100px',
    borderRadius: '8px',
    position: 'relative',
    top: '20px',
    marginRight: theme.spacing(0),
    filter: 'grayscale(100%)',
    '&.selected': {
      filter: 'none',
    },
  },
  details: {
    padding: theme.spacing(5),
  },
  playButton: {
    color: theme.palette.info.main,
    left: '300px',
    top: '50px',
    position: 'relative',
    transform: 'scale(2.8)',
  },
  playBtn: {
    textAlign: 'left',
  },
}));

const images = [
  {
    id: 1,
    src: 'https://picsum.photos/id/1015/600/400',
    title: 'W Maldives',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    id: 2,
    src: 'https://picsum.photos/id/1016/600/400',
    title: 'Image 2',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    id: 3,
    src: 'https://picsum.photos/id/1018/600/400',
    title: 'Image 3',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    id: 4,
    src: 'https://picsum.photos/id/102/600/400',
    title: 'Image 4',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    id: 5,
    src: 'https://picsum.photos/id/1020/600/400',
    title: 'Image 5',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
];

const CatalogViewer = () => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const handlePrevious = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIndex((index + 1) % images.length);
  };

  const handleThumbnailClick = (i) => {
    setIndex(i);
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    let intervalId;
    if (playing) {
      intervalId = setInterval(() => {
        setIndex((index + 1) % images.length);
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [playing, index]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper>
            <img className={classes.image} src={images[index].src} alt={images[index].title} />
          </Paper>
          <Grid container justify="center" alignItems="center" spacing={1}>
            {images.map((image, i) => (
              <Grid item key={i}>
                <img
                  className={`${classes.thumbnail} ${i === index ? 'selected' : ''}`}
                  src={image.src}
                  alt={image.title}
                  onClick={() => handleThumbnailClick(i)}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.details}>
            <Typography className={classes.mainthing} variant="h4">{images[index].title}</Typography>
            <Typography variant="body5">{images[index].description}</Typography>
          </Paper>
          <Grid>
            <IconButton className={classes.playButton} onClick={handlePlayPause}>
              {playing ? <PauseCircleFilledIcon /> : <PlayCircleFilledIcon />}
            </IconButton>
            <div  className={classes.playBtn}>
              <Button disabled={images.length === 1} onClick={handlePrevious}>
                Previous
              </Button>
              <Button disabled={images.length === 1} onClick={handleNext}>
                Next
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default CatalogViewer
