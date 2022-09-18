import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ImageViewer from "react-simple-image-viewer";
function Works() {
  const [currentTab, setCurrentTab] = useState({
    type: "pre_wedding",
    size: 25,
  });

  const [loading, setLoading] = useState(false);
  const [loadSize, setLoadSize] = useState(3);
  const [seqOne, setSeqOne] = useState([]);
  const [seqTwo, setSeqTwo] = useState([]);
  const [seqThree, setSeqThree] = useState([]);
  const [mobile, setMobile] = useState(false);

  const [currentImage, setCurrentImage] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  // Load More
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 5000);
    setLoadSize(4);
  }, [currentTab]);

  const colOne = () => {
    let seq = [];

    Array(Math.floor(currentTab.size / 3))
      .fill()
      .map((item, i) => {
        seq.push(3 * (i + 1) - 2);
      });

    setSeqOne(seq);
  };

  const colTwo = () => {
    let seq = [];

    Array(Math.floor(currentTab.size / 3))
      .fill()
      .map((item, i) => {
        seq.push(3 * (i + 1) - 1);
      });

    setSeqTwo(seq);
  };
  const colThree = () => {
    let seq = [];

    Array(Math.floor(currentTab.size / 3))
      .fill()
      .map((item, i) => {
        seq.push(3 * (i + 1) - 0);
      });

    setSeqThree(seq);
  };

  useEffect(() => {
    colOne();
    colThree();
    colTwo();
  }, [currentTab]);

  // handle window size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    console.log(mobile);
  });

  console.log(seqOne, seqTwo, seqThree, loadSize);
  return (
    <Container>
      <h2>Our latest works</h2>

      <TabMenu>
        <div className="tab-one">
          <Button
            active={currentTab.type === "engagement" ? true : false}
            currentTab={currentTab.type}
            onClick={() => {
              setCurrentTab({
                type: "engagement",
                size: 75,
              });
            }}
          >
            ENGAGEMENT
          </Button>
          <Button
            active={currentTab.type === "pre_wedding" ? true : false}
            currentTab={currentTab.type}
            onClick={() =>
              setCurrentTab({
                type: "pre_wedding",
                size: 25,
              })
            }
          >
            PRE WEDDING
          </Button>
        </div>

        <div className="tab-two">
          <Button
            active={currentTab.type === "wedding" ? true : false}
            currentTab={currentTab.type}
            onClick={() =>
              setCurrentTab({
                type: "wedding",
                size: 18,
              })
            }
          >
            WEDDING
          </Button>
          <Button
            active={currentTab.type === "maternity_shoot" ? true : false}
            currentTab={currentTab.type}
            onClick={() =>
              setCurrentTab({
                type: "maternity_shoot",
                size: 30,
              })
            }
          >
            MATERNITY SHOOT
          </Button>
          <Button
            active={currentTab.type === "baby_shoot" ? true : false}
            currentTab={currentTab.type}
            onClick={() =>
              setCurrentTab({
                type: "baby_shoot",
                size: 26,
              })
            }
          >
            BABY SHOOT
          </Button>
        </div>
        <div className="tab-three">
          <Button
            active={currentTab.type === "baby_shower" ? true : false}
            currentTab={currentTab.type}
            onClick={() =>
              setCurrentTab({
                type: "baby_shower",
                size: 9,
              })
            }
          >
            BABY SHOWER
          </Button>
        </div>
      </TabMenu>

      <ImageGallery>
        {loading ? (
          <Loader />
        ) : (
          <div className="grid-gallery-main">
            {mobile ? (
              <>
                <div className="grid-gallery-col">
                  {Array(currentTab.size)
                    .fill()
                    .slice(0, loadSize)
                    .map((item, i) => (
                      <div className="gallery-item">
                        <LazyLoadImage
                          effect="blur"
                          src={`https://ik.imagekit.io/wupg3d27d/${
                            currentTab.type
                          }/${currentTab.type}_${i + 1}.jpg`}
                          alt=""
                        />
                        <div className="description">
                          <a
                            rel="noreferrer"
                            target="_blank"
                            href={`https://ik.imagekit.io/wupg3d27d/${
                              currentTab.type
                            }/${currentTab.type}_${i + 1}.jpg`}
                          >
                            Open Image
                          </a>
                          <p></p>
                        </div>
                      </div>
                    ))}
                </div>
              </>
            ) : (
              <>
                <div className="grid-gallery-col">
                  {seqOne.slice(0, loadSize).map((item, i) => (
                    <div className="gallery-item">
                      <LazyLoadImage
                        effect="blur"
                        src={`https://ik.imagekit.io/wupg3d27d/${currentTab.type}/${currentTab.type}_${item}.jpg`}
                        alt=""
                      />
                      <div className="description">
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href={`https://ik.imagekit.io/wupg3d27d/${currentTab.type}/${currentTab.type}_${item}.jpg`}
                        >
                          Open Image
                        </a>
                        <p></p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid-gallery-col">
                  {seqTwo.slice(0, loadSize).map((item, i) => (
                    <div className="gallery-item">
                      <LazyLoadImage
                        effect="blur"
                        src={`https://ik.imagekit.io/wupg3d27d/${currentTab.type}/${currentTab.type}_${item}.jpg`}
                        alt=""
                      />
                      <div className="description">
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href={`https://ik.imagekit.io/wupg3d27d/${currentTab.type}/${currentTab.type}_${item}.jpg`}
                        >
                          Open Image
                        </a>
                        <p></p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid-gallery-col">
                  {seqThree.slice(0, loadSize).map((item, i) => (
                    <div className="gallery-item">
                      <LazyLoadImage
                        effect="blur"
                        src={`https://ik.imagekit.io/wupg3d27d/${currentTab.type}/${currentTab.type}_${item}.jpg`}
                        alt=""
                      />

                      <div className="description">
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href={`https://ik.imagekit.io/wupg3d27d/${currentTab.type}/${currentTab.type}_${item}.jpg`}
                        >
                          Open Image
                        </a>
                        <p></p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {!loading && loadSize !== currentTab.size && (
          <LoadButton onClick={() => setLoadSize(currentTab.size)}>
            Load More
          </LoadButton>
        )}
      </ImageGallery>
    </Container>
  );
}

const Loader = styled(ClipLoader)`
  position: absolute;
  top: 50px;
  left: 48%;
  transform: translate(-50%, 0);
`;

const LoadButton = styled.button`
  width: 200px;
  height: 40px;
  background-color: transparent;
  border: #bb9f00 solid 2px;
  font-size: 16px;
  color: #bb9f00;
  border-radius: 5px;
  transition: 0.3s ease-in-out;
  position: absolute;
  bottom: -20px;
  left: 50%;
  bottom: -100px;
  transform: translate(-50%, 0);

  &:hover {
    background-color: #bb9f00;
    color: #fff;
    transition: 0.3s ease-in-out;
  }
`;
const Container = styled.div`
  width: 95%;
  padding: 50px 0px;
  margin: auto;
  max-width: 1170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  h2 {
    font-size: 36px;

    font-weight: 700;
    color: #161616;
    margin-bottom: 40px;
  }
`;

const TabMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  button {
    font-size: 11px;
    color: #000;
  }

  @media only screen and (max-width: 710px) {
    flex-direction: column;
    .tab-one {
      margin-bottom: 15px;
    }

    .tab-three {
      margin-top: 15px;
    }

    button {
      font-size: 10px;
    }
  }
`;

const ImageGallery = styled.div`
  width: 90%;
  margin: 30px auto 50px auto;
  position: relative;
  .grid-gallery-main {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 10px;

    @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    .grid-gallery-col {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      grid-auto-rows: minmax(min-content, max-content);
      grid-gap: 10px;

      .gallery-item {
        width: 100%;
        height: 100%;
        position: relative;
        .description {
          position: absolute;
          backdrop-filter: blur(5px);
          z-index: 100;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          color: #fff;
          background: rgba(0, 0, 0, 0.4);

          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
          border-radius: 10px;

          * {
            transform: translateY(20px);
            transition: transform 0.25s;
          }

          &:hover > * {
            transform: translateY(0);
          }

          &:hover {
            opacity: 1;
            transition: opacity 0.5s ease-in-out;
          }

          a {
            font-size: 23px;
            letter-spacing: 1px;
            text-transform: uppercase;
            margin-bottom: 10px;
            border: none;
            border-bottom: 3px solid #fff;
            padding-bottom: 5px;
            background-color: transparent;
            color: white;
            font-weight: 700;
            cursor: pointer;
            text-decoration: none;

            @media only screen and (max-width: 767px) {
              font-size: 14px;
            }
          }

          p {
            font-size: 18px;
            font-weight: 600;
          }
        }
        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }
    }
  }
`;

const Button = styled.button`
  position: relative;
  margin-right: 20px;
  font-size: 14px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    color: #bb9f00;
  }

  &::after {
    position: absolute;
    z-index: -1;
    content: "";
    transform: translate(-50%, 0);
    left: 50%;
    width: 110%;
    height: 10px;
    bottom: -4px;

    opacity: 0.4;
    background: ${(props) =>
      props.active === true ? "goldenrod" : "transparent"};
  }
`;

export default Works;
