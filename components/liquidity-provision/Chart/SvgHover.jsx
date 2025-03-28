"use client";
import React, { useState, useEffect, useRef } from "react";

const SvgHover = () => {
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [svgWidth, setSvgWidth] = useState(0);
  const svgRef = useRef(null);

  useEffect(() => {
    const updateSvgWidth = () => {
      if (svgRef.current) {
        setSvgWidth(svgRef.current.getBoundingClientRect().width);
      }
    };

    updateSvgWidth();

    window.addEventListener("resize", updateSvgWidth);

    return () => {
      window.removeEventListener("resize", updateSvgWidth);
    };
  }, []);

  const handleMouseMove = (event) => {
    if (!svgWidth) return;

    const numPoints = 7;
    const segmentWidth = svgWidth / numPoints;

    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - svgRef.current.getBoundingClientRect().left;

    const pointIndex = Math.floor(x / segmentWidth) + 1;

    setHoveredPoint(pointIndex);
  };

  const handleMouseLeave = () => {
    setHoveredPoint(null);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center mb-[140px] mt-[60px]">
      <h2 className="text-3xl font-medium tracking-tighter mb-[80px]">
        Liquidity Provision
      </h2>
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 1670 490"
        preserveAspectRatio="xMidYMid meet"
        className="xl:w-[80%] w-[90%]"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <g clip-path="url(#a)">
          <path
            fill="url(#b)"
            fill-rule="evenodd"
            d="M0 424V204.97s92.916 99.908 108.913 96.912c86.325-16.168 189.243-115.779 237.491-115.779C394.652 186.103 529.425 266 598 266c68.575 0 186.06-234.5 238.5-234.5s186.8 173.47 235.27 173.47c48.48 0 198.88-67.109 247.29-67.109 48.4 0 218.47 58.139 266.88 58.139 17.4 0 84.06-41.933 84.06-41.933V424H0Z"
            clip-rule="evenodd"
          />
          <path
            stroke="#2684FF"
            stroke-width="7.861"
            d="M0 201.045S74.633 298 116.981 298c42.347 0 181.175-115.83 229.423-115.83 48.248 0 180.521 81.83 249.096 81.83 68.575 0 189.56-234 242-234s185.8 171.045 234.27 171.045c48.48 0 198.88-67.138 247.29-67.138 48.4 0 211.94 57.593 260.34 57.593 48.41 0 90.6-41.38 90.6-41.38"
          />
          {hoveredPoint === 1 && (
            <g className="point-chart point-1">
              <path
                fill="#2684FF"
                d="M87.983 291.5c0-17.397 14.103-31.5 31.5-31.5s31.5 14.103 31.5 31.5v92c0 17.397-14.103 31.5-31.5 31.5s-31.5-14.103-31.5-31.5v-92Z"
                opacity=".3"
              />
              <g filter="url(#c)">
                <path
                  fill="#2684FF"
                  d="M150.477 290.741c0 16.977-14.078 30.74-31.444 30.74-17.367 0-31.445-13.763-31.445-30.74 0-16.978 14.078-30.741 31.445-30.741 17.366 0 31.444 13.763 31.444 30.741Z"
                />
                <path
                  stroke="#fff"
                  stroke-width="15.722"
                  d="M142.616 290.741c0 12.469-10.39 22.879-23.583 22.879-13.194 0-23.584-10.41-23.584-22.879 0-12.47 10.39-22.88 23.584-22.88 13.193 0 23.583 10.41 23.583 22.88Z"
                />
              </g>
            </g>
          )}

          {hoveredPoint === 2 && (
            <g className="point-chart point-2">
              <path
                fill="#2684FF"
                d="M326.777 193.5c0-17.397 14.103-31.5 31.5-31.5s31.5 14.103 31.5 31.5v190c0 17.397-14.103 31.5-31.5 31.5s-31.5-14.103-31.5-31.5v-190Z"
                opacity=".3"
              />
              <g filter="url(#d)">
                <path
                  fill="#2684FF"
                  d="M388.826 192.741c0 16.977-14.078 30.74-31.444 30.74-17.367 0-31.445-13.763-31.445-30.74 0-16.978 14.078-30.741 31.445-30.741 17.366 0 31.444 13.763 31.444 30.741Z"
                />
                <path
                  stroke="#fff"
                  stroke-width="15.722"
                  d="M380.965 192.741c0 12.469-10.39 22.879-23.583 22.879-13.194 0-23.584-10.41-23.584-22.879 0-12.47 10.39-22.88 23.584-22.88 13.193 0 23.583 10.41 23.583 22.88Z"
                />
              </g>
            </g>
          )}

          {hoveredPoint === 3 && (
            <g className="point-chart point-3">
              <path
                fill="#2684FF"
                d="M565.174 258.5c0-17.397 14.103-31.5 31.5-31.5s31.5 14.103 31.5 31.5v125c0 17.397-14.103 31.5-31.5 31.5s-31.5-14.103-31.5-31.5v-125Z"
                opacity=".3"
              />
              <g filter="url(#e)">
                <path
                  fill="#2684FF"
                  d="M627.571 257.741c0 16.977-14.078 30.74-31.444 30.74s-31.444-13.763-31.444-30.74c0-16.978 14.078-30.741 31.444-30.741s31.444 13.763 31.444 30.741Z"
                />
                <path
                  stroke="#fff"
                  stroke-width="15.722"
                  d="M619.71 257.741c0 12.469-10.39 22.879-23.583 22.879-13.193 0-23.583-10.41-23.583-22.879 0-12.47 10.39-22.88 23.583-22.88 13.193 0 23.583 10.41 23.583 22.88Z"
                />
              </g>
            </g>
          )}

          {hoveredPoint === 4 && (
            <g className="point-chart point-4">
              <path
                fill="#2684FF"
                d="M803.817 31.5c0-17.397 14.103-31.5 31.5-31.5s31.5 14.103 31.5 31.5v352c0 17.397-14.103 31.5-31.5 31.5s-31.5-14.103-31.5-31.5v-352Z"
                opacity=".3"
              />
              <g filter="url(#f)">
                <path
                  fill="#2684FF"
                  d="M866.071 30.74c0 16.978-14.078 30.741-31.444 30.741s-31.444-13.763-31.444-30.74C803.183 13.763 817.261 0 834.627 0s31.444 13.763 31.444 30.74Z"
                />
                <path
                  stroke="#fff"
                  stroke-width="15.722"
                  d="M858.21 30.74c0 12.47-10.39 22.88-23.583 22.88-13.193 0-23.583-10.41-23.583-22.88 0-12.469 10.39-22.879 23.583-22.879 13.193 0 23.583 10.41 23.583 22.88Z"
                />
              </g>
            </g>
          )}

          {hoveredPoint === 5 && (
            <g className="point-chart point-5">
              <path
                fill="#2684FF"
                d="M1042.19 194.5c0-17.397 14.11-31.5 31.5-31.5 17.4 0 31.5 14.103 31.5 31.5v189c0 17.397-14.1 31.5-31.5 31.5-17.39 0-31.5-14.103-31.5-31.5v-189Z"
                opacity=".3"
              />
              <g filter="url(#g)">
                <path
                  fill="#2684FF"
                  d="M1104.84 193.741c0 16.977-14.08 30.74-31.45 30.74-17.36 0-31.44-13.763-31.44-30.74 0-16.978 14.08-30.741 31.44-30.741 17.37 0 31.45 13.763 31.45 30.741Z"
                />
                <path
                  stroke="#fff"
                  stroke-width="15.722"
                  d="M1096.98 193.741c0 12.469-10.39 22.879-23.59 22.879-13.19 0-23.58-10.41-23.58-22.879 0-12.47 10.39-22.88 23.58-22.88 13.2 0 23.59 10.41 23.59 22.88Z"
                />
              </g>
            </g>
          )}

          {hoveredPoint === 6 && (
            <g className="point-chart point-6">
              <path
                fill="#2684FF"
                d="M1280.98 132.5c0-17.397 14.1-31.5 31.5-31.5s31.5 14.103 31.5 31.5v251c0 17.397-14.1 31.5-31.5 31.5s-31.5-14.103-31.5-31.5v-251Z"
                opacity=".3"
              />
              <g filter="url(#h)">
                <path
                  fill="#2684FF"
                  d="M1343.19 131.741c0 16.977-14.07 30.74-31.44 30.74s-31.44-13.763-31.44-30.74c0-16.978 14.07-30.741 31.44-30.741s31.44 13.763 31.44 30.741Z"
                />
                <path
                  stroke="#fff"
                  stroke-width="15.722"
                  d="M1335.33 131.741c0 12.469-10.39 22.879-23.58 22.879-13.19 0-23.58-10.41-23.58-22.879 0-12.47 10.39-22.88 23.58-22.88 13.19 0 23.58 10.41 23.58 22.88Z"
                />
              </g>
            </g>
          )}

          {hoveredPoint === 7 && (
            <g className="point-chart point-7">
              <path
                fill="#2684FF"
                d="M1519.63 193.5c0-17.397 14.11-31.5 31.5-31.5 17.4 0 31.5 14.103 31.5 31.5v190c0 17.397-14.1 31.5-31.5 31.5-17.39 0-31.5-14.103-31.5-31.5v-190Z"
                opacity=".3"
              />
              <g filter="url(#i)">
                <path
                  fill="#2684FF"
                  d="M1581.68 192.741c0 16.977-14.08 30.74-31.44 30.74-17.37 0-31.45-13.763-31.45-30.74 0-16.978 14.08-30.741 31.45-30.741 17.36 0 31.44 13.763 31.44 30.741Z"
                />
                <path
                  stroke="#fff"
                  stroke-width="15.722"
                  d="M1573.82 192.741c0 12.469-10.39 22.879-23.58 22.879-13.19 0-23.58-10.41-23.58-22.879 0-12.47 10.39-22.88 23.58-22.88 13.19 0 23.58 10.41 23.58 22.88Z"
                />
              </g>
            </g>
          )}
        </g>
        <g clip-path="url(#j)">
          <path
            fill="#77838F"
            d="M103.692 447.87V479h-5.895v-16.225l.33-9.103h-.095L89.401 479h-5.33l-8.584-25.328h-.094l.33 9.103V479h-5.896v-31.13h9.433l5.613 16.98 1.981 7.028h.094l2.029-6.981 5.565-17.027h9.15Zm21.89 7.075c2.39 0 4.481.488 6.273 1.462a10.3 10.3 0 0 1 4.245 4.198c1.038 1.824 1.557 4.025 1.557 6.603 0 2.547-.519 4.748-1.557 6.604a10.305 10.305 0 0 1-4.245 4.198c-1.792.974-3.883 1.462-6.273 1.462-2.358 0-4.449-.488-6.273-1.462-1.824-.975-3.254-2.375-4.292-4.198-1.006-1.856-1.509-4.057-1.509-6.604 0-2.578.503-4.779 1.509-6.603 1.038-1.824 2.468-3.223 4.292-4.198 1.824-.974 3.915-1.462 6.273-1.462Zm0 4.811c-1.195 0-2.217.283-3.066.849-.817.535-1.446 1.352-1.886 2.453-.44 1.1-.661 2.484-.661 4.15 0 1.667.221 3.05.661 4.151.44 1.101 1.069 1.934 1.886 2.5.849.534 1.871.802 3.066.802 1.164 0 2.154-.268 2.972-.802.849-.566 1.493-1.399 1.934-2.5.44-1.101.66-2.484.66-4.151 0-1.666-.22-3.05-.66-4.15-.441-1.101-1.085-1.918-1.934-2.453-.818-.566-1.808-.849-2.972-.849ZM146.994 479v-23.583h5.802l.377 7.075-.802-.755c.377-1.541.975-2.814 1.792-3.82a7.325 7.325 0 0 1 2.972-2.217c1.195-.503 2.5-.755 3.915-.755 1.635 0 3.081.315 4.339.943 1.289.629 2.296 1.588 3.019 2.878.754 1.257 1.132 2.845 1.132 4.763V479h-6.462v-13.631c0-2.013-.393-3.396-1.179-4.151-.786-.786-1.808-1.179-3.066-1.179-.88 0-1.745.22-2.594.66-.818.409-1.494 1.085-2.028 2.029-.503.943-.755 2.201-.755 3.773V479h-6.462Zm193.902-31.13v5.236h-10.424V479h-6.509v-25.894h-10.471v-5.236h27.404Zm13.802 31.602c-1.573 0-2.988-.283-4.245-.849-1.258-.566-2.264-1.462-3.019-2.689-.723-1.258-1.085-2.877-1.085-4.858v-15.659h6.462v14.103c0 1.823.377 3.097 1.132 3.82.755.692 1.839 1.038 3.254 1.038.661 0 1.305-.11 1.934-.33a4.571 4.571 0 0 0 1.651-1.132c.503-.504.896-1.148 1.179-1.934.283-.818.425-1.777.425-2.877v-12.688h6.462V479h-5.755l-.236-4.103c-.786 1.572-1.87 2.735-3.254 3.49-1.352.723-2.987 1.085-4.905 1.085Zm35.822 0c-2.484 0-4.653-.488-6.509-1.462a10.317 10.317 0 0 1-4.245-4.198c-1.006-1.824-1.509-4.025-1.509-6.604 0-2.578.503-4.779 1.509-6.603 1.007-1.824 2.406-3.223 4.198-4.198 1.824-.974 3.899-1.462 6.226-1.462 2.39 0 4.418.488 6.085 1.462 1.666.944 2.94 2.249 3.82 3.915.881 1.635 1.321 3.506 1.321 5.613a32.8 32.8 0 0 1-.047 1.792 17.956 17.956 0 0 1-.142 1.51h-18.819v-4.481h15.989l-3.113 1.132c0-1.981-.456-3.506-1.368-4.575-.88-1.069-2.138-1.604-3.773-1.604-1.195 0-2.232.283-3.113.849-.849.566-1.494 1.415-1.934 2.547-.44 1.1-.66 2.5-.66 4.198 0 1.666.236 3.05.707 4.15.504 1.069 1.195 1.871 2.076 2.406.912.534 1.996.802 3.254.802 1.384 0 2.5-.268 3.349-.802.849-.535 1.509-1.274 1.981-2.217l5.141 1.981a8.15 8.15 0 0 1-2.311 3.16c-1.006.881-2.217 1.557-3.632 2.028-1.383.441-2.877.661-4.481.661ZM551.875 479l-9.056-31.13h6.934l6.131 25.706 6.226-25.706h6.226l6.321 25.706 6.084-25.706h6.651L578.336 479h-7.311l-4.34-16.98-1.462-7.358h-.094l-1.462 7.358-4.292 16.98h-7.5Zm52.582.472c-2.484 0-4.654-.488-6.509-1.462a10.305 10.305 0 0 1-4.245-4.198c-1.006-1.824-1.509-4.025-1.509-6.604 0-2.578.503-4.779 1.509-6.603 1.006-1.824 2.405-3.223 4.198-4.198 1.823-.974 3.899-1.462 6.226-1.462 2.389 0 4.418.488 6.084 1.462 1.667.944 2.94 2.249 3.821 3.915.88 1.635 1.32 3.506 1.32 5.613a32.8 32.8 0 0 1-.047 1.792 17.987 17.987 0 0 1-.141 1.51h-18.82v-4.481h15.99l-3.113 1.132c0-1.981-.456-3.506-1.368-4.575-.881-1.069-2.138-1.604-3.774-1.604-1.194 0-2.232.283-3.113.849-.849.566-1.493 1.415-1.933 2.547-.441 1.1-.661 2.5-.661 4.198 0 1.666.236 3.05.708 4.15.503 1.069 1.195 1.871 2.075 2.406.912.534 1.997.802 3.255.802 1.383 0 2.499-.268 3.348-.802.849-.535 1.51-1.274 1.981-2.217l5.142 1.981a8.163 8.163 0 0 1-2.312 3.16c-1.006.881-2.216 1.557-3.631 2.028-1.384.441-2.878.661-4.481.661Zm29.216 0c-1.949 0-3.694-.488-5.235-1.462-1.51-.975-2.704-2.375-3.585-4.198-.849-1.824-1.273-4.009-1.273-6.556 0-2.61.456-4.827 1.367-6.651.912-1.855 2.139-3.254 3.679-4.198 1.573-.974 3.334-1.462 5.283-1.462 2.075 0 3.789.598 5.141 1.792 1.352 1.195 2.233 2.736 2.642 4.623l-.614.754v-17.027h6.462V479h-5.801l-.425-7.169.802.377c-.22 1.478-.723 2.767-1.509 3.868a8.178 8.178 0 0 1-2.972 2.5c-1.195.597-2.515.896-3.962.896Zm1.887-4.953c1.132 0 2.107-.283 2.924-.849.818-.597 1.447-1.462 1.887-2.594.472-1.132.707-2.484.707-4.056 0-1.51-.22-2.783-.66-3.821-.44-1.069-1.069-1.886-1.887-2.452-.817-.566-1.776-.849-2.877-.849-1.761 0-3.144.628-4.15 1.886-.975 1.227-1.463 3.035-1.463 5.424 0 2.39.488 4.214 1.463 5.472.974 1.226 2.327 1.839 4.056 1.839Z"
          />
          <path
            fill="#77838F"
            d="M815.874 447.87v5.236H805.45V479h-6.509v-25.894H788.47v-5.236h27.404ZM823.91 479v-33.913h6.462v14.339c.754-1.509 1.792-2.626 3.113-3.349 1.32-.755 2.814-1.132 4.48-1.132 1.636 0 3.082.315 4.34.943 1.289.629 2.295 1.588 3.018 2.878.755 1.257 1.132 2.845 1.132 4.763V479h-6.461v-13.584c0-2.044-.393-3.443-1.18-4.198-.786-.786-1.792-1.179-3.018-1.179-.912 0-1.792.22-2.641.66-.818.409-1.494 1.101-2.029 2.076-.503.943-.754 2.201-.754 3.773V479h-6.462Zm41.34.472c-1.572 0-2.987-.283-4.245-.849-1.258-.566-2.264-1.462-3.019-2.689-.723-1.258-1.084-2.877-1.084-4.858v-15.659h6.461v14.103c0 1.823.378 3.097 1.132 3.82.755.692 1.84 1.038 3.255 1.038.66 0 1.305-.11 1.934-.33a4.559 4.559 0 0 0 1.65-1.132c.504-.504.897-1.148 1.18-1.934.283-.818.424-1.777.424-2.877v-12.688h6.462V479h-5.754l-.236-4.103c-.786 1.572-1.871 2.735-3.255 3.49-1.352.723-2.987 1.085-4.905 1.085Z"
          />
          <path
            fill="#77838F"
            d="M1066.55 453.106h-16.79v7.924h13.25v5.235h-13.25V479h-6.51v-31.13h23.3v5.236ZM1074.2 479v-23.583h5.62l.42 4.622c.63-1.635 1.54-2.893 2.74-3.773 1.22-.881 2.75-1.321 4.57-1.321.54 0 1.02.047 1.46.142.44.094.81.22 1.09.377l-.76 5.424c-.31-.126-.7-.22-1.18-.283-.44-.063-1.02-.094-1.74-.094-.94 0-1.86.236-2.74.707-.88.44-1.6 1.132-2.17 2.076-.56.911-.84 2.075-.84 3.49V479h-6.47Zm27.09-26.979c-1.36 0-2.36-.283-3.02-.849-.66-.598-.99-1.462-.99-2.594 0-1.164.33-2.028.99-2.594.66-.598 1.66-.897 3.02-.897 1.35 0 2.36.299 3.02.897.66.566.99 1.43.99 2.594 0 1.132-.33 1.996-.99 2.594-.66.566-1.67.849-3.02.849Zm3.2 3.396V479h-6.46v-23.583h6.46Zm180.89-8.018c2.83 0 5.32.487 7.45 1.462 2.14.974 3.97 2.421 5.48 4.339l-3.64 4.198c-1.29-1.635-2.7-2.83-4.24-3.585-1.51-.786-3.27-1.179-5.28-1.179-1.32 0-2.42.173-3.31.519-.84.346-1.47.802-1.88 1.368a3.31 3.31 0 0 0-.57 1.886c0 .849.33 1.573.99 2.17.66.566 1.79 1.038 3.4 1.415l5.8 1.321c3.08.691 5.28 1.729 6.6 3.113 1.36 1.352 2.03 3.113 2.03 5.282 0 2.044-.53 3.805-1.6 5.283-1.07 1.446-2.56 2.563-4.48 3.349-1.92.754-4.12 1.132-6.61 1.132-2.17 0-4.16-.252-5.99-.755-1.79-.535-3.39-1.258-4.81-2.17-1.41-.912-2.59-1.965-3.53-3.16l3.67-4.386a12.245 12.245 0 0 0 2.69 2.688c1.07.786 2.28 1.415 3.63 1.887 1.39.44 2.83.66 4.34.66 1.29 0 2.38-.141 3.26-.424.91-.315 1.59-.739 2.03-1.274.47-.566.7-1.242.7-2.028 0-.817-.28-1.509-.85-2.075-.53-.598-1.54-1.054-3.01-1.368l-6.32-1.415c-1.83-.44-3.4-1.006-4.72-1.698-1.29-.723-2.28-1.635-2.97-2.736-.66-1.132-.99-2.468-.99-4.009 0-1.855.5-3.522 1.51-5 1-1.477 2.45-2.641 4.34-3.49 1.91-.88 4.21-1.32 6.88-1.32Zm35.43 16.555c0-1.352-.4-2.406-1.18-3.16-.76-.755-1.76-1.132-3.02-1.132-1.17 0-2.19.299-3.07.896-.88.597-1.52 1.588-1.93 2.971l-5.52-1.698c.53-2.075 1.7-3.741 3.49-4.999 1.82-1.258 4.26-1.887 7.31-1.887 2.08 0 3.88.33 5.42.991 1.55.629 2.74 1.588 3.59 2.877.88 1.289 1.32 2.908 1.32 4.858v9.575c0 1.195.57 1.792 1.7 1.792.53 0 1.04-.079 1.51-.236l-.38 4.009c-.82.409-1.84.613-3.07.613-1.1 0-2.09-.188-2.97-.565-.88-.378-1.57-.944-2.07-1.698-.51-.787-.76-1.761-.76-2.925v-.188l1.13-.189a5.359 5.359 0 0 1-1.55 3.066c-.85.817-1.89 1.446-3.11 1.886-1.2.441-2.44.661-3.73.661-1.6 0-2.99-.236-4.15-.708-1.16-.503-2.06-1.226-2.69-2.169-.63-.944-.94-2.107-.94-3.491 0-1.761.56-3.191 1.69-4.292 1.14-1.132 2.76-1.902 4.86-2.311l8.87-1.792-.05 4.009-5.66 1.132c-1.07.22-1.88.519-2.45.896-.53.346-.8.927-.8 1.745 0 .786.28 1.384.85 1.792.59.409 1.3.614 2.12.614.66 0 1.3-.079 1.93-.236.63-.158 1.2-.409 1.7-.755.5-.346.9-.818 1.18-1.415.28-.597.43-1.321.43-2.17v-6.367Zm24.99-15.754v23.112c0 1.132.29 1.965.85 2.5.6.503 1.4.754 2.41.754.79 0 1.48-.11 2.07-.33.6-.251 1.14-.582 1.61-.99l1.04 4.292c-.76.597-1.7 1.069-2.83 1.415-1.14.346-2.33.519-3.59.519-1.57 0-2.97-.236-4.2-.708a5.987 5.987 0 0 1-2.83-2.264c-.66-1.037-.99-2.421-.99-4.15v-22.357l6.46-1.793Zm7.55 7.217v4.811H1335v-4.811h18.35Zm164.57-8.018c2.83 0 5.31.487 7.45 1.462 2.14.974 3.96 2.421 5.47 4.339l-3.63 4.198c-1.29-1.635-2.7-2.83-4.24-3.585-1.51-.786-3.27-1.179-5.29-1.179-1.32 0-2.42.173-3.3.519-.85.346-1.48.802-1.88 1.368a3.31 3.31 0 0 0-.57 1.886c0 .849.33 1.573.99 2.17.66.566 1.79 1.038 3.4 1.415l5.8 1.321c3.08.691 5.28 1.729 6.6 3.113 1.35 1.352 2.03 3.113 2.03 5.282 0 2.044-.54 3.805-1.6 5.283-1.07 1.446-2.57 2.563-4.49 3.349-1.91.754-4.11 1.132-6.6 1.132-2.17 0-4.17-.252-5.99-.755-1.79-.535-3.39-1.258-4.81-2.17-1.41-.912-2.59-1.965-3.54-3.16l3.68-4.386c.72 1.006 1.62 1.902 2.69 2.688 1.07.786 2.28 1.415 3.63 1.887 1.39.44 2.83.66 4.34.66 1.29 0 2.38-.141 3.26-.424.91-.315 1.58-.739 2.02-1.274.48-.566.71-1.242.71-2.028 0-.817-.28-1.509-.85-2.075-.53-.598-1.54-1.054-3.02-1.368l-6.32-1.415c-1.82-.44-3.39-1.006-4.71-1.698-1.29-.723-2.28-1.635-2.97-2.736-.67-1.132-1-2.468-1-4.009 0-1.855.51-3.522 1.51-5 1.01-1.477 2.46-2.641 4.34-3.49 1.92-.88 4.22-1.32 6.89-1.32Zm30.33 32.073c-1.58 0-2.99-.283-4.25-.849-1.26-.566-2.26-1.462-3.02-2.689-.72-1.258-1.08-2.877-1.08-4.858v-15.659h6.46v14.103c0 1.823.38 3.097 1.13 3.82.76.692 1.84 1.038 3.26 1.038.66 0 1.3-.11 1.93-.33a4.542 4.542 0 0 0 1.65-1.132c.5-.504.9-1.148 1.18-1.934.28-.818.42-1.777.42-2.877v-12.688h6.47V479h-5.76l-.23-4.103c-.79 1.572-1.88 2.735-3.26 3.49-1.35.723-2.99 1.085-4.9 1.085Zm24.88-.472v-23.583h5.8l.37 7.075-.8-.755c.38-1.541.98-2.814 1.8-3.82a7.22 7.22 0 0 1 2.97-2.217c1.19-.503 2.5-.755 3.91-.755 1.64 0 3.08.315 4.34.943 1.29.629 2.3 1.588 3.02 2.878.75 1.257 1.13 2.845 1.13 4.763V479h-6.46v-13.631c0-2.013-.39-3.396-1.18-4.151-.79-.786-1.81-1.179-3.07-1.179-.88 0-1.74.22-2.59.66-.82.409-1.49 1.085-2.03 2.029-.5.943-.75 2.201-.75 3.773V479h-6.46Z"
          />
        </g>
        <defs>
          <filter
            id="c"
            width="76.888"
            height="75.481"
            x="80.588"
            y="253"
            color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="3.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.180267 0 0 0 0 0.308533 0 0 0 0 0.693333 0 0 0 0.25 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_363_1412"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_363_1412"
              result="shape"
            />
          </filter>
          <filter
            id="d"
            width="76.888"
            height="75.481"
            x="318.937"
            y="155"
            color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="3.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.180267 0 0 0 0 0.308533 0 0 0 0 0.693333 0 0 0 0.25 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_363_1412"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_363_1412"
              result="shape"
            />
          </filter>
          <filter
            id="e"
            width="76.888"
            height="75.481"
            x="557.683"
            y="220"
            color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="3.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.180267 0 0 0 0 0.308533 0 0 0 0 0.693333 0 0 0 0.25 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_363_1412"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_363_1412"
              result="shape"
            />
          </filter>
          <filter
            id="f"
            width="76.888"
            height="75.481"
            x="796.183"
            y="-7"
            color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="3.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.180267 0 0 0 0 0.308533 0 0 0 0 0.693333 0 0 0 0.25 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_363_1412"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_363_1412"
              result="shape"
            />
          </filter>
          <filter
            id="g"
            width="76.888"
            height="75.481"
            x="1034.95"
            y="156"
            color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="3.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.180267 0 0 0 0 0.308533 0 0 0 0 0.693333 0 0 0 0.25 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_363_1412"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_363_1412"
              result="shape"
            />
          </filter>
          <filter
            id="h"
            width="76.888"
            height="75.481"
            x="1273.31"
            y="94"
            color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="3.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.180267 0 0 0 0 0.308533 0 0 0 0 0.693333 0 0 0 0.25 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_363_1412"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_363_1412"
              result="shape"
            />
          </filter>
          <filter
            id="i"
            width="76.889"
            height="75.481"
            x="1511.79"
            y="155"
            color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="3.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.180267 0 0 0 0 0.308533 0 0 0 0 0.693333 0 0 0 0.25 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_363_1412"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_363_1412"
              result="shape"
            />
          </filter>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h1670v415H0z" />
          </clipPath>
          <clipPath id="j">
            <path fill="#fff" d="M0 435h1670v55H0z" />
          </clipPath>
          <linearGradient
            id="b"
            x1="16.81"
            x2="16.81"
            y1="35"
            y2="416.169"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2684FF" />
            <stop offset="1" stop-color="#fff" stop-opacity=".01" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default SvgHover;
