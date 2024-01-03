/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState, useRef } from 'react';
import SearchIcon from '../../public/search-normal.svg';
import CopyIcon from '../../public/copy.svg';
import FramIcon from '../../public/frammer.svg';
import UploadIcon from '../../public/upload_AI.svg';
import Network_group from '../../public/Network_group.svg';
import Python_Frame from '../../public/PythonFrame.svg';
import Profile_Icon from '../../public/Profile_Icon.svg';
import Python_Icon from '../../public/Python.svg';

const FriendsSinging =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/FiendsSinging.svg';
const ShareFriends =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/ShareFriends.svg';
const UploadToCloud =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/UploadToCloud.svg';
const HiHand =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/HifiHand.svg';
const GroupPortfolio =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/GroupPortfolio.svg';
const Snippet =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Snippit.svg';
const Snippet_2 =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Snippit_2.svg';
const Loading =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Loading.svg';
const Send = 'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Send.svg';
const Convert =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Convert.svg';
const Format =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Frame.svg';
const Search =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Search.svg';
const NetworkSearch =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/NetworkBackground.svg';
const NetworkGroup =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/NetworkGroup.svg';
const JoinBG =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/JoinBg.png';
const Instagram =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/instagram.svg';
//import XLogo from 'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/x-logo.svg';
const Connect =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Connect.svg';
const Desktop_12 =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Desktop_12.svg';
const NetworkBackground =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/NetworkBackground.svg';
const Horizontal =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Horizontal.svg';
const Create =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Create.svg';
const Elevate =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Elevate.svg';
const Sprinkle =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Sparkle.svg';
const Designer =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Designer.svg';
const FemaleDesigner =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/FemaleWebDesigner.svg';
const ColorPallet =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/ColorPellet.svg';
const Rocket =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Rocket.svg';
const Stairs =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Stairs.svg';
const PinkSun =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/PinkSun.svg';
const ChatBubble =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/ChatBubble.svg';
const Line =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Horizontal_1.svg';

const LandingPage = () => {
  const waitListButtonRef = useRef(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [email, setEmail] = useState('');
  const TitleImages = ['Connect', 'Create', 'Elevate'];
  const LeftTopImages = [FriendsSinging, Sprinkle, Rocket];
  const LeftBottomImages = [ShareFriends, Designer, Stairs];
  const RightTopImages = [UploadToCloud, FemaleDesigner, ChatBubble];
  const RightBottomImages = [HiHand, ColorPallet, PinkSun];
  const colors = ['bg-[#026BF6]', 'bg-[#43943C]', 'bg-[#9E00FF]'];
  const borderColors = ['border-[#4285F4]', 'border-[#1EA713]', 'border-[#B042F4]'];
  const shadowColors = ['shadow-teal-400', 'shadow-green-500', 'shadow-purple-500'];
  const [buttonText, setButtonText] = useState('Join Wait List');
  const handleClick = () => {
    setIsButtonClicked((prev) => !prev);
  };

  const workAICardData = [
    {
      img: UploadIcon,
      title: 'Upload any type of documents',
      sub_title: 'Effortlessly upload any document, any format, any time.',
    },
    {
      img: CopyIcon,
      title: 'Convert documents into Snippets',
      sub_title: 'Transform. Showcase. Thrive. Snippets to make your portfolio journey effortless.',
    },
    {
      img: FramIcon,
      title: 'Save time by overviewing the snippets with AI',
      sub_title:
        'Stand out in seconds. AI showcases your skills and experience in bite-sized snippets.',
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = fetch('http://localhost:3500/api/v1/waitlist', {
        method: 'POST',
      });
      response = await response.json();
      console.log(response);
      if (response.status === 200) {
        setButtonText('You are added');
        setIsButtonClicked((prev) => !prev);
      }
      handleClick();
    } catch (err) {
      console.log(e);
      setButtonText('Failed to add you..');
    }
  };
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % TitleImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [TitleImages.length]);

  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const rotateInterval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 1);
    }, 50);

    return () => clearInterval(rotateInterval);
  }, []);

  const radialGradientStyles = {
    borderRadius: '999px',
    opacity: 0.9421,
    backgroundImage:
      'radial-gradient(50% 50% at 50% 50%, rgba(2, 107, 246, 0.50) 0%, rgba(2, 107, 246, 0.00) 100%)',
    filter: 'blur(0.2px)',
  };

  function scrollToWaitList() {
    if (waitListButtonRef.current) {
      waitListButtonRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
  return (
    <>
      <div className="bg-[#040102] pt-12 text-white font-montserrat text-center md:text-left">
        {/* Layout of Connect */}
        <div className=" mx-6 md:mx-8 mt-6 px-2 md:mt-14 gap-6 md:gap-[8%] flex flex-col md:flex-row justify-between md:justify-center ">
          <div className="flex flex-row md:flex-col justify-between md:gap-48">
            <div className="w-[4rem] md:w-[7rem] relative overflow-hidden h-[4rem] md:h-[7rem] flex justify-center ...">
              {LeftTopImages?.map((image, index) => (
                <img
                  key={index}
                  className={`absolute bottom-0 transition-transform duration-1000 ${
                    index === currentImageIndex
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-full'
                  }`}
                  src={image}
                  alt={`Transforming Image ${index + 1}`}
                />
              ))}
            </div>
            <div className="relative overflow-hidden w-[4rem] md:w-[7rem] md:h-[7rem] h-[4rem] mt-[2rem] md:mt-[0rem] flex justify-center ...">
              {LeftBottomImages.map((image, index) => (
                <img
                  key={index}
                  className={`absolute bottom-0 transition-transform duration-1000 ${
                    index === currentImageIndex
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-full'
                  }`}
                  src={image}
                  alt={`Transforming Image ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center ...">
            <div className="relative overflow-hidden h-[4rem] md:h-[7rem] flex justify-center ">
              {TitleImages.map((item, index) => (
                <h2
                  key={index}
                  className={`absolute bottom-0 transition-transform duration-1000 ${
                    index === currentImageIndex
                      ? 'opacity-100 translate-y-0 text-white text-[3rem] md:text-[6rem] font-semibold text-shadow: 0 4px 6px rgba(255, 255, 255, 0.8)'
                      : 'opacity-0 translate-y-full'
                  }`}
                >
                  {item}
                </h2>
              ))}
            </div>
            <p className="font-semibold text-stone-300 text-xs md:tex-sm text-subtitle font-normal text-center leading-6 md:leading-8">
              Craft Your Profile with WorkGallery, Elevate Your Presence, and <br />
              Connect with Like-minded Creatives
            </p>
            <div className="w-[100%] flex justify-center items-center mt-10 md:mt-16">
              {isButtonClicked ? (
                <form
                  onSubmit={handleSubmit}
                  className="flex justify-center items-center flex-col "
                >
                  <input
                    type="email"
                    placeholder="enter email"
                    onChange={(e) => {
                      if (e.target.value.length === 0) {
                        handleClick();
                      }
                      setEmail(e.target.value);
                    }}
                    value={email}
                    className="border-4 w-[20rem] md:w-[30rem] text-center border-gray-700 rounded-full py-3 px-4 bg-transparent  font-thin focus:outline-none "
                  />
                  <button
                    className={`text-center w-[20rem] md:w-[30rem] my-5 font-semibold text-sm md:text-xl rounded-full shadow border-2 py-4 ${colors[currentImageIndex]} ${borderColors[currentImageIndex]} ${shadowColors[currentImageIndex]} text-white`}
                  >
                    Join Wait list
                  </button>
                </form>
              ) : (
                <button
                  onClick={handleClick}
                  ref={waitListButtonRef}
                  className={` text-sm md:text-xl w-[20rem] md:w-[26rem] font-semibold rounded-full shadow border-2 p-2 py-4 ${colors[currentImageIndex]} ${borderColors[currentImageIndex]} ${shadowColors[currentImageIndex]} text-white`}
                >
                  {buttonText}
                </button>
              )}
            </div>
          </div>
          <div className="flex flex-row md:flex-col justify-between md:gap-48 md:pt-28">
            <div className="relative overflow-hidden w-[4rem] md:w-[7rem] md:h-[7rem] h-[4rem] mt-[2rem] md:mt-[0rem] flex justify-center ">
              {RightTopImages?.map((image, index) => (
                <img
                  key={index}
                  className={`absolute bottom-0 transition-transform duration-1000 ${
                    index === currentImageIndex
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-full'
                  }`}
                  src={image}
                  alt={`Transforming Image ${index + 1}`}
                />
              ))}
            </div>
            <div className="relative overflow-hidden w-[4rem] md:w-[7rem] h-[4rem] md:h-[7rem] flex justify-center ">
              {RightBottomImages.map((image, index) => (
                <img
                  key={index}
                  className={`absolute bottom-0 transition-transform duration-1000 ${
                    index === currentImageIndex
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-full'
                  }`}
                  src={image}
                  alt={`Transforming Image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Old Portfolio screen */}
        <div
          className="mt-10 mx-6 md:mx-10 flex flex-col gap-2 md:gap-3 justify-center p-6 md:p-6 md:mt-16 bg-cover bg-center bg-no-repeat rounded-xl"
          style={{ backgroundImage: `url(${Desktop_12})` }}
        >
          <h3 className="text-lg md:text-4xl font-bold text-center">
            Say <strong className="text-accent">Goodbye to the Old Style</strong> of <br /> Editing
            Portfolio
          </h3>
          <p className="text-sm md:text-2xl text-pf_subtitle font-normal text-center">
            Choose from 1000s of themes based on your profession
          </p>
          <div className="flex justify-center ...">
            <div className="flex justify-between gap-2 font-semibold md:gap-4 rounded-xl md:rounded-2xl mt-8 md:mt-14 text-sm md:text-lg font-normal bg-accent py-3 px-4 md:px-8 md:py-5  w-[19rem] md:w-[24rem]">
              <p>Feasible</p>
              <p>|</p>
              <p>Scalable</p>
              <p>|</p>
              <p>Optimized</p>
            </div>
          </div>
          <div className="flex justify-center mt-6 md:mt-20">
            <img src={GroupPortfolio} alt="Group_Portfolio" />
          </div>
        </div>

        {/* Workgallery AI screen*/}
        <div className="mt-14 mx-6 md:mx-10 p-8 flex gap-6 flex-col justify-center">
          <h3 className="text-lg md:text-4xl font-bold text-center">
            <strong className="text-accent">Workgallery AI: </strong> Your Secret <br /> Weapon for
            a Portfolio that Wows
          </h3>
          <h4 className="text-sm md:text-xl text-white text-stone-300 font-semibold text-center">
            Power up your workflow: Extensions & pipelines meet editing nirvana.
          </h4>
          <div className="mt-16 gap-20 flex flex-col md:flex-row justify-center ...." style={radialGradientStyles}>
            <div className="w-[100%] md:w-[32rem] p-4 md:p-10 border border-r-0 border-b-0 border-gray-300 shadow-lg bg-[#040102] rounded-xl">
              <div className="relative flex justify-between flex-col gap-4 p-4 rounded-xl bg-black">
                <div className="flex justify-between gap-4">
                  <div className="text-stone-500 font-medium text-xs">
                    <h5 className="mb-2">import turtle</h5>
                    <p>
                      def draw_rectangle(width, height): <br /> turtle.forward(width) <br />{' '}
                      turtle.left(90) <br /> turtle.forward(height) <br /> turtle.left(90) <br />{' '}
                      turtle.forward(width)
                      <br /> turtle.left(90) <br /> turtle.forward(height) turtle.left(90) <br /> #
                      Set up the turtle screen
                      <br />
                      turtle.speed(1) # Set the drawing speed (1 is s)
                    </p>
                  </div>
                  <div className="flex flex-col flex-start ...">
                    <img src={Python_Icon} alt="SearchIcon" className='hidden md:block' />
                  </div>
                </div>
                <div className="z-10 border rounded-xl border-blue-600 bg-gradient-to-r from-opacity-40 via-opacity-80 to-opacity-40 p-4 flex justify-between ...">
                  <p className="text-xs md:text-sm font-semibold leading-6 md:leading-8 text-stone-600">
                    Upload any type of file
                  </p>
                  <button className="text-xs p-2 border border-gray-700 rounded-md">
                    upload file
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[100%] md:w-[32rem] p-4 border border-r-0 border-b-0 bg-[#040102] border-blue-600 shadow-lg rounded-xl">
              <div className="text-sm font-semibold flex"><img src={Profile_Icon} alt="Profile"/><h4 className='mt-1 ml-4 '>Surya<span className='text-xs text-stone-300'>, IIT Dhanbad</span></h4></div>
              <img src={Python_Frame} alt="" className="w-[100%] h-[60%] md:h-[70%] mt-4" />
              <p className="text-xs font-medium text-opacity-70 mt-4">
                "Midhun, a Python virtuoso, reveals his creative mastery through an expertly
                <br /> crafted rectangle design. Demonstrating skillful precision, he showcases the
                <br /> artistry of Python programming."
              </p>
            </div>
          </div>
          <div className="mt-16 w-[100%] gap-10 md:gap-[8%] flex flex-col md:flex-row justify-center ...">
            {workAICardData?.map((item, index) => (
              <div className="w-[100%] md:w-[17rem] flex flex-col gap-2 md:gap-4" key={index}>
                <div className="flex justify-center md:justify-start">
                  <img src={item.img} alt="Icon" className=" w-12 h-12" />
                </div>
                <h4 className="text:sm md:text-xl font-semibold leading-6 md:leading-8">
                  {item.title}
                </h4>
                <p className="text-stone-300 text-sm font-semibold md:leading-6">
                  {item.sub_title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Network screen*/}
        <div className="mt-6 md:mt-14 mx-6 md:mx-10 p-8 flex gap-6 flex-col justify-center">
          <h3 className="text-lg md:text-4xl font-bold text-center">
            <strong className="text-accent">Networking Just Got Better </strong> with <br /> The
            Work Gallery
          </h3>
          <h4 className="text-sm md:text-xl text-white text-stone-300 font-semibold text-center">
            Power up your workflow: Extensions & pipelines meet editing nirvana.
          </h4>
          <div className="w-[100%] mt-2 md:mt-32 md:mb-32 flex justify-center ...">
            <div className="w-[100%] md:w-[20rem] bg-stone-950 gap-2 border-2 px-6 py-4 border-zinc-500 rounded-full flex justify-center ...">
              <textarea
                disabled
                placeholder="Search"
                className="font-xs md:text-sm font-semibold leading-5 text-white focus:outline-none bg-stone-950 h-[4rem]"
                value="I want to find people who has software along with design skills"
              />
              <div className="flex flex-col flex-start ...">
                <img src={SearchIcon} alt="Search_icon" />
              </div>
            </div>
          </div>
          <img src={Network_group} alt="network_group" className='w-[100%] block md:hidden'/>
        </div>

        {/* Footer for desktop and tab view */}
        <footer className=" md:block bg-[#131313] py-16 px-32 font-gilroy">
          <div className="flex flex-col gap-6 justify-center ...">
            <div className="flex justify-center gap-14 ...">
              <a href="https://www.instagram.com/workgallery.io/">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href="https://twitter.com/Workgallery_io/communities">
                <img src={''} alt="x-logo" />
              </a>
            </div>
            <div className="flex justify-center flex-col md:flex-row gap-10 leading-2 text-base font-normal text-footer_font ...">
              <a href="/blogs">Blogs</a>
              <a href="/about">About Us</a>
            </div>
            <div className="flex justify-center ...">
              <img src={Horizontal} alt="Horizontal" />
            </div>
            <p className="text-center font-normal text-base text-footer_font">
              Workgallery.io 2023
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
