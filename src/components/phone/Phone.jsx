import { useContext } from 'react'
import PhoneContext from '@/context/PhoneContext'

export default function Phone() {
  const sockets = ['#', '*', 0, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  const asterisk = <>&#128956;</>
  const socketSpacer = 3 // space between the first and last socket (equal to socket size)
  const dialOffsetDist = 28 // if is set to less then 28 (will generate BUG in counter clockwise rotation)

  const { dialInput, handleMouseDown, handleMouseUp, handleMouseLeave, handleMouseMove } =
    useContext(PhoneContext)

  return (
    <div className="phone--content">
      <img src="./top-view-retro-telephone-small 1.jpg" className="phone--img"></img>
      <a
        id="call"
        className="call--number-display"
        tabIndex="-1"
        href={`tel:${dialInput}`}
      >
        {dialInput}
      </a>
      <div className="dial">
        <div className="dial--bg">
          <svg
            width="100%"
            height="100%"
            foucusable="false"
            fill="none"
            version="1.1"
            viewBox="0 0 257 259"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(3,3)" filter="url(#filter0_ddiii_85_4)">
              <path
                d="m125 250c69.036 0 125-55.964 125-125 0-69.036-55.964-125-125-125-69.036 0-125 55.964-125 125 0 69.036 55.964 125 125 125zm0-45c44.183 0 80-35.817 80-80 0-44.183-35.817-80-80-80-44.183 0-80 35.817-80 80 0 44.183 35.817 80 80 80z"
                clipRule="evenodd"
                fill="#ffffff"
                fillOpacity=".06"
                fillRule="evenodd"
                shapeRendering="crispEdges"
              />
            </g>
            <defs>
              <filter
                id="filter0_ddiii_85_4"
                x="0"
                y="0"
                width="254"
                height="256"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx="2" dy="4" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.68 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_85_4" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx="1" dy="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.16 0" />
                <feBlend in2="effect1_dropShadow_85_4" result="effect2_dropShadow_85_4" />
                <feBlend
                  in="SourceGraphic"
                  in2="effect2_dropShadow_85_4"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.58 0" />
                <feBlend in2="shape" result="effect3_innerShadow_85_4" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="12" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0" />
                <feBlend
                  in2="effect3_innerShadow_85_4"
                  result="effect4_innerShadow_85_4"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx="2" dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.62 0" />
                <feBlend
                  in2="effect4_innerShadow_85_4"
                  result="effect5_innerShadow_85_4"
                />
              </filter>
            </defs>
          </svg>
          {sockets.map((socket, i) => (
            <div
              className="dial--socket"
              key={i + 1}
              style={{
                '--socket-offset-dist': `${
                  (100 / (sockets.length + socketSpacer)) * i + dialOffsetDist
                }%`,
              }}
            >
              {socket === '*' ? asterisk : socket}
            </div>
          ))}
        </div>
        <div
          className="dial--controller"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          {sockets.map((socket, i) => (
            <button
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              className="dial--controller-socket"
              key={i + 1}
              value={socket}
              style={{
                '--socket-offset-dist': `${
                  (100 / (sockets.length + socketSpacer)) * i + dialOffsetDist
                }%`,
              }}
            ></button>
          ))}
        </div>
        <div className="stopper"></div>
      </div>
    </div>
  )
}
