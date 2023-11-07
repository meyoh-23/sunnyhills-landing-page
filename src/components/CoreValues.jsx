import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import desktopEgg from './../assets/images/desktop/image-transform.jpg';
import mobileEgg from './../assets/images/mobile/image-transform.jpg';
import desktopStandOut from './../assets/images/desktop/image-stand-out.jpg';
import mobileStandOut from './../assets/images/mobile/image-stand-out.jpg';
import destPhotorgraphy from './../assets/images/desktop/image-photography.jpg';
import mobilePhotography from './../assets/images/mobile/image-photography.jpg';
import desktopGraphics from './../assets/images/desktop/image-graphic-design.jpg';
import mobileGraphics from './../assets/images/mobile/image-graphic-design.jpg';

function CoreValues() {
  return (
    <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        gap: "0px"
    }}>
        <Box
        sx={{
            display: "flex",
            flexDirection: {
                xs: "column",
                md: "row",
            }
        }}
        >
            <Box
            sx={{
              width: {
                xs: "100vw",
                md: "50vw"
              }
            }}
            >
              <Box
              sx={{
                display: {
                  xs: "flex",
                  md: "none"
                }
              }}
              >
                <img src={mobileEgg} alt="mobileEgg"  style={{
                  width: "100%",
                  height: "100%"
                }}/>
              </Box>
              <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex"
                },
                px: 4,
                py: 6,
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 3
              }}
              >
                <Typography variant='h4'
                sx={{
                  fontFamily: "'Fraunces', serif",
                  fontWeight: "900",
                  color: "hsl(212, 27%, 19%)",
                  maxWidth: "300px",
                }}
                >
                  Transform your brand
                </Typography>
                <Typography variant='p'
                sx={{
                textAlign: "left",
                fontWeight: "600",
                fontFamily: "'Barlow', sans-serif",
                fontSize: "1.125rem",
                color: "hsl(210, 4%, 67%)"
              }}
                >
                  We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
                </Typography>
                <Button
                variant='text'
                size='large'
                sx={{
                  fontFamily: "'Fraunces', serif",
                  color: "hsl(212, 27%, 19%)",
                  fontWeight: "700",
                  px: "1rem",
                  pb: 0,
                  position: "relative",
                }}
                >
                  see more 
                  <span 
                  style={{
                    width: "98px",
                    height: "5px",
                    backgroundColor: "hsl(51, 100%, 49%)",
                    position: "absolute",
                    left: "7px",
                    bottom: "3px",
                    borderRadius: "2px"
                }}>

                </span>
                </Button>
              </Box>
            </Box>
            <Box
            sx={{
              width: {
                xs: "100vw",
                md: "50vw"
              }
            }}
            >
              <Box sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
                p: 4,
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 3
              }}>
                <Typography variant='h4'
                sx={{
                  fontFamily: "'Fraunces', serif",
                  fontWeight: "900",
                  color: "hsl(212, 27%, 19%)",
                  textAlign: "center"
                }}
                >
                  Transform your brand
                </Typography>
                <Typography variant='p'
                sx={{
                  textAlign: "center",
                  fontWeight: "600",
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "1.125rem",
                  color: "hsl(210, 4%, 67%)"
                }}
                >
                  We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
                </Typography>
              </Box>
              <Box sx={{
                display: {
                  xs: "none",
                  md: "flex",
                }
              }}>
                <img src={desktopEgg} alt="desktopEgg" style={{
                  width: "100%",
                  height: "100%"
                }}/>
              </Box>
            </Box>
        </Box>
        <Box
        sx={{
            display: "flex",
            flexDirection: {
                xs: "column",
                md: "row",
            }
        }}
        >
          <Box sx={{
            display: {
              xs: "none",
              md: "flex",
              width: "50vw"
            }
          }}>
            <img 
            src={desktopStandOut } 
            alt="desktopStandOut " 
            style={{
              width: "100%",
              height: "100%",
            }}
            />
          </Box>
          <Box sx={{
            display: {
              xs: "none",
              md: "flex",
              width: "50vw"
            },
            px: 4,
            py: 6,
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 3
          }}>
            <Typography variant='h4'
            sx={{
                  fontFamily: "'Fraunces', serif",
                  fontWeight: "900",
                  color: "hsl(212, 27%, 19%)",
                  maxWidth: "300px",
                }}
            >
              Transform your brand
            </Typography>
            <Typography variant='p'
            sx={{
                textAlign: "left",
                fontWeight: "600",
                fontFamily: "'Barlow', sans-serif",
                fontSize: "1.125rem",
                color: "hsl(210, 4%, 67%)"
              }}
            >
              We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
            </Typography>
            <Button
                variant='text'
                size='large'
                sx={{
                  fontFamily: "'Fraunces', serif",
                  color: "hsl(212, 27%, 19%)",
                  fontWeight: "700",
                  px: "1rem",
                  pb: 0,
                  position: "relative",
                }}
                >
                  see more 
                  <span 
                  style={{
                    width: "98px",
                    height: "5px",
                    backgroundColor: "hsl(7, 99%, 70%)",
                    position: "absolute",
                    left: "7px",
                    bottom: "3px",
                    borderRadius: "2px"
                }}>

                </span>
                </Button>
          </Box>
          <Box
          sx={{
            display: {
              xs: "flex",
              md: "none"
            }
          }}
          >
            <img src={mobileStandOut} alt="mobileStandOut" style={{
              width: "100%",
              height: "100%",
            }}/>
          </Box>
          <Box sx={{
            display: {
              xs: "flex",
              md: "none",
            },
            p: 4,
            flexDirection: "column",
            alignItems: "center",
            gap: 3
          }}>
            <Typography variant='h4'
            sx={{
              fontFamily: "'Fraunces', serif",
              fontWeight: "900",
              color: "hsl(212, 27%, 19%)",
              textAlign: "center"
            }}
            >
              Stand out to the right audience
            </Typography>
            <Typography variant='p'
            sx={{
                textAlign: "center",
                fontWeight: "600",
                fontFamily: "'Barlow', sans-serif",
                fontSize: "1.125rem",
                color: "hsl(210, 4%, 67%)"
              }}
            >
              Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
            </Typography>
          </Box>
        </Box>
        <Box
        sx={{
            display: "flex",
            flexDirection: {
                xs: "column",
                md: "row",
            }
        }}
        >
          <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            backgroundImage: {
              xs: `url(${mobileGraphics})`,
              md: `url(${desktopGraphics })`,
            },
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: {
              xs: "100vw",
              md: "50vw"
            },
            height: {
              xs: "95vh",
              md: "75vh"
            }
          }}
          >
            <Box sx={{
              pt: {
                xs: "90%",
                md: "50%"
              },
              display: "flex",
              flexDirection: "column",
              px: "20%",
              gap: "2rem",
            }}>
              <Typography variant='h4'
              sx={{
              fontFamily: "'Fraunces', serif",
              fontWeight: "900",
              color: "hsl(212, 27%, 19%)",
              textAlign: "center"
              }}
            >
              Graphic design
              </Typography>
              <Typography 
              sx={{
                textAlign: "center",
                fontWeight: "600",
                fontFamily: "'Barlow', sans-serif",
                fontSize: "1.125rem",
                color: "hsl(213, 9%, 39%)"
              }}
              >
                Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
              </Typography>
            </Box>
          </Box>
          <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundImage: {
              xs: `url(${mobilePhotography})`,
              md: `url(${destPhotorgraphy })`,
            },
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: {
              xs: "100vw",
              md: "50vw"
            },
            height: {
              xs: "95vh",
              md: "75vh"
            }
          }}
          >
            <Box sx={{
              pt: {
                xs: "90%",
                md: "50%"
              },
              display: "flex",
              flexDirection: "column",
              px: "20%",
              gap: "2rem",
            }}>
              <Typography variant='h4'
              sx={{
              fontFamily: "'Fraunces', serif",
              fontWeight: "900",
              color: "hsl(212, 27%, 19%)",
              textAlign: "center",
              gap: 3,
              }}
              >
              Graphic design
              </Typography>
              <Typography 
              sx={{
                textAlign: "center",
                fontWeight: "600",
                fontFamily: "'Barlow', sans-serif",
                fontSize: "1.125rem",
                color: "hsl(212, 27%, 19%)"
              }}
              >
                Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
              </Typography>
            </Box>
          </Box>
        </Box>
    </Box>
  )
}

export default CoreValues;