import React, { useLayoutEffect, useRef } from 'react';
import { calcScrollPercent } from '~/lib/utils';
import './Records.scss';

const Records = ({ className }) => {
  const svgRef = useRef(null);

  const animate = () => {
    const movementAllowance = 0.7;
    // if (screen.width < 768) movementAllowance = 0.45;
    const svgEl = svgRef.current;
    const { width } = svgEl.getBoundingClientRect();
    const scrollPercent = calcScrollPercent({
      element: svgEl,
      scrollDurationCoefficient: 0.4
    });
    const records = svgEl.querySelectorAll('g.record');
    records.forEach(
      (record, i) =>
        (record.style.transform = `translate3d(-${scrollPercent *
          width *
          (movementAllowance - i * 0.2)}px, 0, 0)`)
    );
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', animate);
    return () => window.removeEventListener('scroll', animate);
  }, []);

  return (
    <svg
      className={['records-svg', className].join(' ')}
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1044.2 1044.3"
      xmlSpace="preserve"
      ref={svgRef}
    >
      <g className="record">
        <g transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, 0, 0)">
          <path
            className="st0"
            d="M522.1,0.1c-40.3,0-79.5,4.6-117.2,13.2l6.3,27.3c36.1-8.3,73.2-12.5,110.9-12.5
                                    c66.7,0,131.4,13.1,192.3,38.8c58.8,24.9,111.7,60.5,157,105.9c45.4,45.4,81,98.2,105.9,157c25.8,60.9,38.8,125.6,38.8,192.3
                                    s-13.1,131.4-38.8,192.3c-24.9,58.8-60.5,111.7-105.9,157c-45.4,45.4-98.2,81-157,105.9c-60.9,25.8-125.6,38.8-192.3,38.8
                                    c-66.7,0-131.4-13.1-192.3-38.8c-58.8-24.9-111.7-60.5-157-105.9c-45.4-45.4-81-98.2-105.9-157C41.1,653.4,28.1,588.8,28.1,522
                                    c0-65.1,12.4-128.3,37-187.9l-26-10.6C13.9,384.8,0,451.9,0,522.2c0,288.3,233.7,522.1,522.1,522.1s522.1-233.7,522.1-522.1
                                    S810.4,0.1,522.1,0.1z"
          />
          <path
            className="st1"
            d="M66.9,329.9c24.9-58.8,60.5-111.7,105.9-157c45.4-45.4,98.2-81,157-105.9c26.5-11.2,53.6-20,81.4-26.4
                                    l-6.3-27.3C238.7,51.4,102.8,168.8,39.1,323.6L65,334.2C65.6,332.8,66.2,331.3,66.9,329.9z"
          />
          <path
            className="st2"
            d="M522.1,171.9c193.4,0,350.2,156.8,350.2,350.2S715.5,872.4,522.1,872.4S171.9,715.6,171.9,522.2
                                    c0-47.2,9.3-92.1,26.2-133.2l-133-54.7c-24.5,59.6-37,122.8-37,187.9c0,66.7,13.1,131.4,38.8,192.3
                                    c24.9,58.8,60.5,111.7,105.9,157c45.4,45.4,98.2,81,157,105.9c60.9,25.8,125.6,38.8,192.3,38.8c66.7,0,131.4-13.1,192.3-38.8
                                    c58.8-24.9,111.7-60.5,157-105.9c45.4-45.4,81-98.2,105.9-157c25.8-60.9,38.8-125.6,38.8-192.3s-13.1-131.4-38.8-192.3
                                    c-24.9-58.8-60.5-111.7-105.9-157c-45.4-45.4-98.2-81-157-105.9c-60.9-25.8-125.6-38.9-192.3-38.9c-37.7,0-74.8,4.2-110.9,12.5
                                    l32.3,140.2C468.8,175,495.1,171.9,522.1,171.9z"
          />
          <path
            className="st3"
            d="M172.8,172.8c-45.4,45.4-81,98.2-105.9,157c-0.6,1.5-1.2,2.9-1.8,4.4l133,54.7
                                    C240.8,285.1,332,206.4,443.5,180.8L411.2,40.6C383.4,47,356.3,55.8,329.8,67C271,91.8,218.1,127.4,172.8,172.8z"
          />
          <path
            className="st0"
            d="M522.1,872.4c193.4,0,350.2-156.8,350.2-350.2S715.5,171.9,522.1,171.9c-27,0-53.3,3.1-78.6,8.9l6.8,29.7
                                    c23.4-5.4,47.4-8.1,71.8-8.1c43.2,0,85,8.5,124.5,25.1c38.1,16.1,72.3,39.2,101.6,68.5c29.4,29.4,52.4,63.6,68.5,101.6
                                    c16.7,39.4,25.1,81.3,25.1,124.5s-8.5,85-25.1,124.5c-16.1,38.1-39.2,72.3-68.5,101.6c-29.4,29.4-63.6,52.4-101.6,68.5
                                    c-39.4,16.7-81.3,25.1-124.5,25.1c-43.2,0-85.1-8.5-124.5-25.1c-38.1-16.1-72.3-39.2-101.6-68.5c-29.4-29.4-52.4-63.6-68.5-101.6
                                    c-16.7-39.4-25.1-81.3-25.1-124.5c0-42.1,8.1-83,24-121.6L198.1,389c-16.9,41.1-26.2,86-26.2,133.2
                                    C171.9,715.6,328.7,872.4,522.1,872.4z"
          />
          <path
            className="st1"
            d="M227.5,397.7c16.1-38.1,39.2-72.3,68.5-101.6c29.4-29.4,63.6-52.4,101.6-68.5c17.1-7.2,34.7-12.9,52.7-17.1
                                    l-6.8-29.7C332,206.4,240.8,285.1,198.1,389l28.2,11.6C226.7,399.6,227.1,398.6,227.5,397.7z"
          />
          <path
            className="st2"
            d="M522.1,308.1c28.9,0,56.9,5.7,83.3,16.8c25.5,10.8,48.4,26.2,68,45.9c19.7,19.7,35.1,42.6,45.9,68
                                    c11.2,26.4,16.8,54.4,16.8,83.3c0,28.9-5.7,56.9-16.8,83.3c-10.8,25.5-26.2,48.4-45.9,68c-19.7,19.7-42.6,35.1-68,45.9
                                    C579,730.5,551,736,522.1,736c-28.9,0-56.9-5.7-83.3-16.8c-25.5-10.8-48.4-26.2-68-45.9c-19.7-19.7-35.1-42.6-45.9-68
                                    c-11.2-26.4-16.8-54.4-16.8-83.3c0-28.2,5.4-55.6,16-81.4l-97.8-40.2c-15.9,38.6-24,79.5-24,121.6c0,43.2,8.5,85,25.1,124.5
                                    c16.1,38.1,39.2,72.3,68.5,101.6c29.4,29.4,63.6,52.4,101.6,68.5c39.4,16.7,81.3,25.1,124.5,25.1c43.2,0,85-8.5,124.5-25.1
                                    c38.1-16.1,72.3-39.2,101.6-68.5c29.4-29.4,52.4-63.6,68.5-101.6c16.7-39.4,25.1-81.3,25.1-124.5s-8.5-85.1-25.1-124.5
                                    c-16.1-38.1-39.2-72.3-68.5-101.6c-29.4-29.4-63.6-52.4-101.6-68.5c-39.4-16.7-81.3-25.1-124.5-25.1c-24.4,0-48.4,2.7-71.8,8.1
                                    l23.7,103C489.7,309.9,505.8,308.1,522.1,308.1z"
          />
          <path
            className="st3"
            d="M296,296.1c-29.4,29.4-52.4,63.6-68.5,101.6c-0.4,0.9-0.8,1.9-1.2,2.9l97.8,40.2c0.3-0.6,0.5-1.3,0.8-1.9
                                    c10.8-25.5,26.2-48.4,45.9-68c19.7-19.7,42.6-35.1,68-45.9c11.5-4.8,23.2-8.7,35.3-11.4l-23.7-103c-18,4.1-35.6,9.8-52.7,17.1
                                    C359.6,243.6,325.4,266.7,296,296.1z"
          />
          <path
            className="st1"
            d="M474,313.5c-12,2.8-23.8,6.6-35.3,11.4c-25.5,10.8-48.4,26.2-68,45.9c-19.7,19.7-35.1,42.6-45.9,68
                                    c-0.3,0.6-0.5,1.3-0.8,1.9l198,81.4L474,313.5z"
          />
          <path
            className="st0"
            d="M324.9,605.5c10.8,25.5,26.2,48.4,45.9,68c19.7,19.7,42.6,35.1,68,45.9c26.4,11.2,54.4,16.8,83.3,16.8
                                    c28.9,0,56.9-5.7,83.3-16.8c25.5-10.8,48.4-26.2,68-45.9c19.7-19.7,35.1-42.6,45.9-68c11.2-26.4,16.8-54.4,16.8-83.3
                                    c0-28.9-5.7-56.9-16.8-83.3c-10.8-25.5-26.2-48.4-45.9-68c-19.7-19.7-42.6-35.1-68-45.9c-26.4-11.2-54.4-16.9-83.3-16.9
                                    c-16.3,0-32.4,1.8-48.1,5.4l48.1,208.7l-198-81.4c-10.6,25.8-16,53.2-16,81.4C308,551.1,313.7,579.1,324.9,605.5z"
          />
        </g>
        <path
          className="st4"
          d="M522.1,682.2c-21.6,0-42.6-4.2-62.3-12.6c-19.1-8.1-36.2-19.6-50.9-34.3s-26.2-31.8-34.3-50.9
                            c-8.3-19.7-12.6-40.7-12.6-62.3s4.2-42.6,12.6-62.3c8.1-19.1,19.6-36.2,34.3-50.9s31.8-26.2,50.9-34.3
                            c19.7-8.3,40.7-12.6,62.3-12.6c21.6,0,42.6,4.2,62.3,12.6c19.1,8.1,36.2,19.6,50.9,34.3c14.7,14.7,26.2,31.8,34.3,50.9
                            c8.3,19.7,12.6,40.7,12.6,62.3s-4.2,42.6-12.6,62.3c-8.1,19.1-19.6,36.2-34.3,50.9c-14.7,14.7-31.8,26.2-50.9,34.3
                            C564.7,678,543.7,682.2,522.1,682.2z"
        />
        <path
          className="st5"
          d="M522.1,669.2c-19.9,0-39.1-3.9-57.2-11.6c-17.5-7.4-33.2-18-46.7-31.5s-24.1-29.2-31.5-46.7
                            c-7.7-18.1-11.6-37.4-11.6-57.2s3.9-39.1,11.6-57.2c7.4-17.5,18-33.2,31.5-46.7s29.2-24.1,46.7-31.5c18.1-7.7,37.4-11.6,57.2-11.6
                            c19.8,0,39.1,3.9,57.2,11.6c17.5,7.4,33.2,18,46.7,31.5s24.1,29.2,31.5,46.7c7.7,18.1,11.6,37.4,11.6,57.2
                            c0,19.9-3.9,39.1-11.6,57.2c-7.4,17.5-18,33.2-31.5,46.7s-29.2,24.1-46.7,31.5C561.2,665.3,542,669.2,522.1,669.2z"
        />
        <path
          className="st6"
          d="M522.1,618.2c-13,0-25.6-2.5-37.4-7.5c-11.4-4.8-21.7-11.8-30.6-20.6c-8.8-8.8-15.8-19.1-20.6-30.6
                            c-5-11.8-7.5-24.4-7.5-37.4s2.5-25.6,7.5-37.4c4.8-11.4,11.8-21.7,20.6-30.5s19.1-15.8,30.5-20.6c11.8-5,24.4-7.5,37.4-7.5
                            c13,0,25.6,2.5,37.4,7.5c11.4,4.8,21.7,11.8,30.5,20.6c8.8,8.8,15.8,19.1,20.6,30.5c5,11.8,7.5,24.4,7.5,37.4s-2.5,25.6-7.5,37.4
                            c-4.8,11.4-11.8,21.7-20.6,30.6c-8.8,8.8-19.1,15.8-30.5,20.6C547.7,615.7,535.1,618.2,522.1,618.2z"
        />
        <path
          className="st7"
          d="M522.1,537.2c-2,0-4-0.4-5.9-1.2c-1.8-0.8-3.4-1.8-4.8-3.2c-1.4-1.4-2.5-3-3.2-4.8c-0.8-1.9-1.2-3.8-1.2-5.9
                            s0.4-4,1.2-5.9c0.8-1.8,1.8-3.4,3.2-4.8c1.4-1.4,3-2.5,4.8-3.2c1.9-0.8,3.8-1.2,5.9-1.2c2.1,0,4,0.4,5.9,1.2
                            c1.8,0.8,3.4,1.8,4.8,3.2c1.4,1.4,2.5,3,3.2,4.8c0.8,1.9,1.2,3.8,1.2,5.9c0,2-0.4,4-1.2,5.9c-0.8,1.8-1.8,3.4-3.2,4.8
                            c-1.4,1.4-3,2.5-4.8,3.2C526.1,536.8,524.1,537.2,522.1,537.2z"
        />
      </g>
      <g className="record">
        <g transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, 0, 0)">
          <path
            className="st0"
            d="M522.1,0.1c-40.3,0-79.5,4.6-117.2,13.2l6.3,27.3c36.1-8.3,73.2-12.5,110.9-12.5
                                    c66.7,0,131.4,13.1,192.3,38.8c58.8,24.9,111.7,60.5,157,105.9c45.4,45.4,81,98.2,105.9,157c25.8,60.9,38.8,125.6,38.8,192.3
                                    s-13.1,131.4-38.8,192.3c-24.9,58.8-60.5,111.7-105.9,157c-45.4,45.4-98.2,81-157,105.9c-60.9,25.8-125.6,38.8-192.3,38.8
                                    c-66.7,0-131.4-13.1-192.3-38.8c-58.8-24.9-111.7-60.5-157-105.9c-45.4-45.4-81-98.2-105.9-157C41.1,653.4,28.1,588.8,28.1,522
                                    c0-65.1,12.4-128.3,37-187.9l-26-10.6C13.9,384.8,0,451.9,0,522.2c0,288.3,233.7,522.1,522.1,522.1s522.1-233.7,522.1-522.1
                                    S810.4,0.1,522.1,0.1z"
          />
          <path
            className="st1"
            d="M66.9,329.9c24.9-58.8,60.5-111.7,105.9-157c45.4-45.4,98.2-81,157-105.9c26.5-11.2,53.6-20,81.4-26.4
                                    l-6.3-27.3C238.7,51.4,102.8,168.8,39.1,323.6L65,334.2C65.6,332.8,66.2,331.3,66.9,329.9z"
          />
          <path
            className="st2"
            d="M522.1,171.9c193.4,0,350.2,156.8,350.2,350.2S715.5,872.4,522.1,872.4S171.9,715.6,171.9,522.2
                                    c0-47.2,9.3-92.1,26.2-133.2l-133-54.7c-24.5,59.6-37,122.8-37,187.9c0,66.7,13.1,131.4,38.8,192.3
                                    c24.9,58.8,60.5,111.7,105.9,157c45.4,45.4,98.2,81,157,105.9c60.9,25.8,125.6,38.8,192.3,38.8c66.7,0,131.4-13.1,192.3-38.8
                                    c58.8-24.9,111.7-60.5,157-105.9c45.4-45.4,81-98.2,105.9-157c25.8-60.9,38.8-125.6,38.8-192.3s-13.1-131.4-38.8-192.3
                                    c-24.9-58.8-60.5-111.7-105.9-157c-45.4-45.4-98.2-81-157-105.9c-60.9-25.8-125.6-38.9-192.3-38.9c-37.7,0-74.8,4.2-110.9,12.5
                                    l32.3,140.2C468.8,175,495.1,171.9,522.1,171.9z"
          />
          <path
            className="st3"
            d="M172.8,172.8c-45.4,45.4-81,98.2-105.9,157c-0.6,1.5-1.2,2.9-1.8,4.4l133,54.7
                                    C240.8,285.1,332,206.4,443.5,180.8L411.2,40.6C383.4,47,356.3,55.8,329.8,67C271,91.8,218.1,127.4,172.8,172.8z"
          />
          <path
            className="st0"
            d="M522.1,872.4c193.4,0,350.2-156.8,350.2-350.2S715.5,171.9,522.1,171.9c-27,0-53.3,3.1-78.6,8.9l6.8,29.7
                                    c23.4-5.4,47.4-8.1,71.8-8.1c43.2,0,85,8.5,124.5,25.1c38.1,16.1,72.3,39.2,101.6,68.5c29.4,29.4,52.4,63.6,68.5,101.6
                                    c16.7,39.4,25.1,81.3,25.1,124.5s-8.5,85-25.1,124.5c-16.1,38.1-39.2,72.3-68.5,101.6c-29.4,29.4-63.6,52.4-101.6,68.5
                                    c-39.4,16.7-81.3,25.1-124.5,25.1c-43.2,0-85.1-8.5-124.5-25.1c-38.1-16.1-72.3-39.2-101.6-68.5c-29.4-29.4-52.4-63.6-68.5-101.6
                                    c-16.7-39.4-25.1-81.3-25.1-124.5c0-42.1,8.1-83,24-121.6L198.1,389c-16.9,41.1-26.2,86-26.2,133.2
                                    C171.9,715.6,328.7,872.4,522.1,872.4z"
          />
          <path
            className="st1"
            d="M227.5,397.7c16.1-38.1,39.2-72.3,68.5-101.6c29.4-29.4,63.6-52.4,101.6-68.5c17.1-7.2,34.7-12.9,52.7-17.1
                                    l-6.8-29.7C332,206.4,240.8,285.1,198.1,389l28.2,11.6C226.7,399.6,227.1,398.6,227.5,397.7z"
          />
          <path
            className="st2"
            d="M522.1,308.1c28.9,0,56.9,5.7,83.3,16.8c25.5,10.8,48.4,26.2,68,45.9c19.7,19.7,35.1,42.6,45.9,68
                                    c11.2,26.4,16.8,54.4,16.8,83.3c0,28.9-5.7,56.9-16.8,83.3c-10.8,25.5-26.2,48.4-45.9,68c-19.7,19.7-42.6,35.1-68,45.9
                                    C579,730.5,551,736,522.1,736c-28.9,0-56.9-5.7-83.3-16.8c-25.5-10.8-48.4-26.2-68-45.9c-19.7-19.7-35.1-42.6-45.9-68
                                    c-11.2-26.4-16.8-54.4-16.8-83.3c0-28.2,5.4-55.6,16-81.4l-97.8-40.2c-15.9,38.6-24,79.5-24,121.6c0,43.2,8.5,85,25.1,124.5
                                    c16.1,38.1,39.2,72.3,68.5,101.6c29.4,29.4,63.6,52.4,101.6,68.5c39.4,16.7,81.3,25.1,124.5,25.1c43.2,0,85-8.5,124.5-25.1
                                    c38.1-16.1,72.3-39.2,101.6-68.5c29.4-29.4,52.4-63.6,68.5-101.6c16.7-39.4,25.1-81.3,25.1-124.5s-8.5-85.1-25.1-124.5
                                    c-16.1-38.1-39.2-72.3-68.5-101.6c-29.4-29.4-63.6-52.4-101.6-68.5c-39.4-16.7-81.3-25.1-124.5-25.1c-24.4,0-48.4,2.7-71.8,8.1
                                    l23.7,103C489.7,309.9,505.8,308.1,522.1,308.1z"
          />
          <path
            className="st3"
            d="M296,296.1c-29.4,29.4-52.4,63.6-68.5,101.6c-0.4,0.9-0.8,1.9-1.2,2.9l97.8,40.2c0.3-0.6,0.5-1.3,0.8-1.9
                                    c10.8-25.5,26.2-48.4,45.9-68c19.7-19.7,42.6-35.1,68-45.9c11.5-4.8,23.2-8.7,35.3-11.4l-23.7-103c-18,4.1-35.6,9.8-52.7,17.1
                                    C359.6,243.6,325.4,266.7,296,296.1z"
          />
          <path
            className="st1"
            d="M474,313.5c-12,2.8-23.8,6.6-35.3,11.4c-25.5,10.8-48.4,26.2-68,45.9c-19.7,19.7-35.1,42.6-45.9,68
                                    c-0.3,0.6-0.5,1.3-0.8,1.9l198,81.4L474,313.5z"
          />
          <path
            className="st0"
            d="M324.9,605.5c10.8,25.5,26.2,48.4,45.9,68c19.7,19.7,42.6,35.1,68,45.9c26.4,11.2,54.4,16.8,83.3,16.8
                                    c28.9,0,56.9-5.7,83.3-16.8c25.5-10.8,48.4-26.2,68-45.9c19.7-19.7,35.1-42.6,45.9-68c11.2-26.4,16.8-54.4,16.8-83.3
                                    c0-28.9-5.7-56.9-16.8-83.3c-10.8-25.5-26.2-48.4-45.9-68c-19.7-19.7-42.6-35.1-68-45.9c-26.4-11.2-54.4-16.9-83.3-16.9
                                    c-16.3,0-32.4,1.8-48.1,5.4l48.1,208.7l-198-81.4c-10.6,25.8-16,53.2-16,81.4C308,551.1,313.7,579.1,324.9,605.5z"
          />
        </g>
        <path
          className="st4"
          d="M522.1,682.2c-21.6,0-42.6-4.2-62.3-12.6c-19.1-8.1-36.2-19.6-50.9-34.3s-26.2-31.8-34.3-50.9
                            c-8.3-19.7-12.6-40.7-12.6-62.3c0-21.6,4.2-42.6,12.6-62.3c8.1-19.1,19.6-36.2,34.3-50.9s31.8-26.2,50.9-34.3
                            c19.7-8.3,40.7-12.6,62.3-12.6c21.6,0,42.6,4.2,62.3,12.6c19.1,8.1,36.2,19.6,50.9,34.3c14.7,14.7,26.2,31.8,34.3,50.9
                            c8.3,19.7,12.6,40.7,12.6,62.3c0,21.6-4.2,42.6-12.6,62.3c-8.1,19.1-19.6,36.2-34.3,50.9c-14.7,14.7-31.8,26.2-50.9,34.3
                            C564.7,678,543.7,682.2,522.1,682.2z"
        />
        <path
          className="st5"
          d="M522.1,669.2c-19.9,0-39.1-3.9-57.2-11.6c-17.5-7.4-33.2-18-46.7-31.5s-24.1-29.2-31.5-46.7
                            c-7.7-18.1-11.6-37.4-11.6-57.2c0-19.8,3.9-39.1,11.6-57.2c7.4-17.5,18-33.2,31.5-46.7s29.2-24.1,46.7-31.5
                            c18.1-7.7,37.4-11.6,57.2-11.6c19.8,0,39.1,3.9,57.2,11.6c17.5,7.4,33.2,18,46.7,31.5s24.1,29.2,31.5,46.7
                            c7.7,18.1,11.6,37.4,11.6,57.2c0,19.9-3.9,39.1-11.6,57.2c-7.4,17.5-18,33.2-31.5,46.7s-29.2,24.1-46.7,31.5
                            C561.2,665.3,542,669.2,522.1,669.2z"
        />
        <path
          className="st6"
          d="M522.1,618.2c-13,0-25.6-2.5-37.4-7.5c-11.4-4.8-21.7-11.8-30.6-20.6c-8.8-8.8-15.8-19.1-20.6-30.6
                            c-5-11.8-7.5-24.4-7.5-37.4c0-13,2.5-25.6,7.5-37.4c4.8-11.4,11.8-21.7,20.6-30.5s19.1-15.8,30.5-20.6c11.8-5,24.4-7.5,37.4-7.5
                            c13,0,25.6,2.5,37.4,7.5c11.4,4.8,21.7,11.8,30.5,20.6c8.8,8.8,15.8,19.1,20.6,30.5c5,11.8,7.5,24.4,7.5,37.4
                            c0,13-2.5,25.6-7.5,37.4c-4.8,11.4-11.8,21.7-20.6,30.6c-8.8,8.8-19.1,15.8-30.5,20.6C547.7,615.7,535.1,618.2,522.1,618.2z"
        />
        <path
          className="st7"
          d="M522.1,537.2c-2,0-4-0.4-5.9-1.2c-1.8-0.8-3.4-1.8-4.8-3.2c-1.4-1.4-2.5-3-3.2-4.8c-0.8-1.9-1.2-3.8-1.2-5.9
                            s0.4-4,1.2-5.9c0.8-1.8,1.8-3.4,3.2-4.8c1.4-1.4,3-2.5,4.8-3.2c1.9-0.8,3.8-1.2,5.9-1.2c2.1,0,4,0.4,5.9,1.2
                            c1.8,0.8,3.4,1.8,4.8,3.2c1.4,1.4,2.5,3,3.2,4.8c0.8,1.9,1.2,3.8,1.2,5.9c0,2-0.4,4-1.2,5.9c-0.8,1.8-1.8,3.4-3.2,4.8
                            c-1.4,1.4-3,2.5-4.8,3.2C526.1,536.8,524.1,537.2,522.1,537.2z"
        />
      </g>
      <g className="record">
        <g transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, 0, 0)">
          <path
            className="st0"
            d="M522.1,0.1c-40.3,0-79.5,4.6-117.2,13.2l6.3,27.3c36.1-8.3,73.2-12.5,110.9-12.5
                                    c66.7,0,131.4,13.1,192.3,38.8c58.8,24.9,111.7,60.5,157,105.9c45.4,45.4,81,98.2,105.9,157c25.8,60.9,38.8,125.6,38.8,192.3
                                    s-13.1,131.4-38.8,192.3c-24.9,58.8-60.5,111.7-105.9,157c-45.4,45.4-98.2,81-157,105.9c-60.9,25.8-125.6,38.8-192.3,38.8
                                    c-66.7,0-131.4-13.1-192.3-38.8c-58.8-24.9-111.7-60.5-157-105.9c-45.4-45.4-81-98.2-105.9-157C41.1,653.4,28.1,588.8,28.1,522
                                    c0-65.1,12.4-128.3,37-187.9l-26-10.6C13.9,384.8,0,451.9,0,522.2c0,288.3,233.7,522.1,522.1,522.1s522.1-233.7,522.1-522.1
                                    S810.4,0.1,522.1,0.1z"
          />
          <path
            className="st1"
            d="M66.9,329.9c24.9-58.8,60.5-111.7,105.9-157c45.4-45.4,98.2-81,157-105.9c26.5-11.2,53.6-20,81.4-26.4
                                    l-6.3-27.3C238.7,51.4,102.8,168.8,39.1,323.6L65,334.2C65.6,332.8,66.2,331.3,66.9,329.9z"
          />
          <path
            className="st2"
            d="M522.1,171.9c193.4,0,350.2,156.8,350.2,350.2S715.5,872.4,522.1,872.4S171.9,715.6,171.9,522.2
                                    c0-47.2,9.3-92.1,26.2-133.2l-133-54.7c-24.5,59.6-37,122.8-37,187.9c0,66.7,13.1,131.4,38.8,192.3
                                    c24.9,58.8,60.5,111.7,105.9,157c45.4,45.4,98.2,81,157,105.9c60.9,25.8,125.6,38.8,192.3,38.8c66.7,0,131.4-13.1,192.3-38.8
                                    c58.8-24.9,111.7-60.5,157-105.9c45.4-45.4,81-98.2,105.9-157c25.8-60.9,38.8-125.6,38.8-192.3s-13.1-131.4-38.8-192.3
                                    c-24.9-58.8-60.5-111.7-105.9-157c-45.4-45.4-98.2-81-157-105.9c-60.9-25.8-125.6-38.9-192.3-38.9c-37.7,0-74.8,4.2-110.9,12.5
                                    l32.3,140.2C468.8,175,495.1,171.9,522.1,171.9z"
          />
          <path
            className="st3"
            d="M172.8,172.8c-45.4,45.4-81,98.2-105.9,157c-0.6,1.5-1.2,2.9-1.8,4.4l133,54.7
                                    C240.8,285.1,332,206.4,443.5,180.8L411.2,40.6C383.4,47,356.3,55.8,329.8,67C271,91.8,218.1,127.4,172.8,172.8z"
          />
          <path
            className="st0"
            d="M522.1,872.4c193.4,0,350.2-156.8,350.2-350.2S715.5,171.9,522.1,171.9c-27,0-53.3,3.1-78.6,8.9l6.8,29.7
                                    c23.4-5.4,47.4-8.1,71.8-8.1c43.2,0,85,8.5,124.5,25.1c38.1,16.1,72.3,39.2,101.6,68.5c29.4,29.4,52.4,63.6,68.5,101.6
                                    c16.7,39.4,25.1,81.3,25.1,124.5s-8.5,85-25.1,124.5c-16.1,38.1-39.2,72.3-68.5,101.6c-29.4,29.4-63.6,52.4-101.6,68.5
                                    c-39.4,16.7-81.3,25.1-124.5,25.1c-43.2,0-85.1-8.5-124.5-25.1c-38.1-16.1-72.3-39.2-101.6-68.5c-29.4-29.4-52.4-63.6-68.5-101.6
                                    c-16.7-39.4-25.1-81.3-25.1-124.5c0-42.1,8.1-83,24-121.6L198.1,389c-16.9,41.1-26.2,86-26.2,133.2
                                    C171.9,715.6,328.7,872.4,522.1,872.4z"
          />
          <path
            className="st1"
            d="M227.5,397.7c16.1-38.1,39.2-72.3,68.5-101.6c29.4-29.4,63.6-52.4,101.6-68.5c17.1-7.2,34.7-12.9,52.7-17.1
                                    l-6.8-29.7C332,206.4,240.8,285.1,198.1,389l28.2,11.6C226.7,399.6,227.1,398.6,227.5,397.7z"
          />
          <path
            className="st2"
            d="M522.1,308.1c28.9,0,56.9,5.7,83.3,16.8c25.5,10.8,48.4,26.2,68,45.9c19.7,19.7,35.1,42.6,45.9,68
                                    c11.2,26.4,16.8,54.4,16.8,83.3c0,28.9-5.7,56.9-16.8,83.3c-10.8,25.5-26.2,48.4-45.9,68c-19.7,19.7-42.6,35.1-68,45.9
                                    C579,730.5,551,736,522.1,736c-28.9,0-56.9-5.7-83.3-16.8c-25.5-10.8-48.4-26.2-68-45.9c-19.7-19.7-35.1-42.6-45.9-68
                                    c-11.2-26.4-16.8-54.4-16.8-83.3c0-28.2,5.4-55.6,16-81.4l-97.8-40.2c-15.9,38.6-24,79.5-24,121.6c0,43.2,8.5,85,25.1,124.5
                                    c16.1,38.1,39.2,72.3,68.5,101.6c29.4,29.4,63.6,52.4,101.6,68.5c39.4,16.7,81.3,25.1,124.5,25.1c43.2,0,85-8.5,124.5-25.1
                                    c38.1-16.1,72.3-39.2,101.6-68.5c29.4-29.4,52.4-63.6,68.5-101.6c16.7-39.4,25.1-81.3,25.1-124.5s-8.5-85.1-25.1-124.5
                                    c-16.1-38.1-39.2-72.3-68.5-101.6c-29.4-29.4-63.6-52.4-101.6-68.5c-39.4-16.7-81.3-25.1-124.5-25.1c-24.4,0-48.4,2.7-71.8,8.1
                                    l23.7,103C489.7,309.9,505.8,308.1,522.1,308.1z"
          />
          <path
            className="st3"
            d="M296,296.1c-29.4,29.4-52.4,63.6-68.5,101.6c-0.4,0.9-0.8,1.9-1.2,2.9l97.8,40.2c0.3-0.6,0.5-1.3,0.8-1.9
                                    c10.8-25.5,26.2-48.4,45.9-68c19.7-19.7,42.6-35.1,68-45.9c11.5-4.8,23.2-8.7,35.3-11.4l-23.7-103c-18,4.1-35.6,9.8-52.7,17.1
                                    C359.6,243.6,325.4,266.7,296,296.1z"
          />
          <path
            className="st1"
            d="M474,313.5c-12,2.8-23.8,6.6-35.3,11.4c-25.5,10.8-48.4,26.2-68,45.9c-19.7,19.7-35.1,42.6-45.9,68
                                    c-0.3,0.6-0.5,1.3-0.8,1.9l198,81.4L474,313.5z"
          />
          <path
            className="st0"
            d="M324.9,605.5c10.8,25.5,26.2,48.4,45.9,68c19.7,19.7,42.6,35.1,68,45.9c26.4,11.2,54.4,16.8,83.3,16.8
                                    c28.9,0,56.9-5.7,83.3-16.8c25.5-10.8,48.4-26.2,68-45.9c19.7-19.7,35.1-42.6,45.9-68c11.2-26.4,16.8-54.4,16.8-83.3
                                    c0-28.9-5.7-56.9-16.8-83.3c-10.8-25.5-26.2-48.4-45.9-68c-19.7-19.7-42.6-35.1-68-45.9c-26.4-11.2-54.4-16.9-83.3-16.9
                                    c-16.3,0-32.4,1.8-48.1,5.4l48.1,208.7l-198-81.4c-10.6,25.8-16,53.2-16,81.4C308,551.1,313.7,579.1,324.9,605.5z"
          />
        </g>
        <path
          className="st4"
          d="M522.1,682.2c-21.6,0-42.6-4.2-62.3-12.6c-19.1-8.1-36.2-19.6-50.9-34.3s-26.2-31.8-34.3-50.9
                            c-8.3-19.7-12.6-40.7-12.6-62.3s4.2-42.6,12.6-62.3c8.1-19.1,19.6-36.2,34.3-50.9s31.8-26.2,50.9-34.3
                            c19.7-8.3,40.7-12.6,62.3-12.6c21.6,0,42.6,4.2,62.3,12.6c19.1,8.1,36.2,19.6,50.9,34.3c14.7,14.7,26.2,31.8,34.3,50.9
                            c8.3,19.7,12.6,40.7,12.6,62.3s-4.2,42.6-12.6,62.3c-8.1,19.1-19.6,36.2-34.3,50.9c-14.7,14.7-31.8,26.2-50.9,34.3
                            C564.7,678,543.7,682.2,522.1,682.2z"
        />
        <path
          className="st5"
          d="M522.1,669.2c-19.9,0-39.1-3.9-57.2-11.6c-17.5-7.4-33.2-18-46.7-31.5s-24.1-29.2-31.5-46.7
                            c-7.7-18.1-11.6-37.4-11.6-57.2s3.9-39.1,11.6-57.2c7.4-17.5,18-33.2,31.5-46.7s29.2-24.1,46.7-31.5c18.1-7.7,37.4-11.6,57.2-11.6
                            c19.8,0,39.1,3.9,57.2,11.6c17.5,7.4,33.2,18,46.7,31.5s24.1,29.2,31.5,46.7c7.7,18.1,11.6,37.4,11.6,57.2
                            c0,19.9-3.9,39.1-11.6,57.2c-7.4,17.5-18,33.2-31.5,46.7s-29.2,24.1-46.7,31.5C561.2,665.3,542,669.2,522.1,669.2z"
        />
        <path
          className="st6"
          d="M522.1,618.2c-13,0-25.6-2.5-37.4-7.5c-11.4-4.8-21.7-11.8-30.6-20.6c-8.8-8.8-15.8-19.1-20.6-30.6
                            c-5-11.8-7.5-24.4-7.5-37.4s2.5-25.6,7.5-37.4c4.8-11.4,11.8-21.7,20.6-30.5s19.1-15.8,30.5-20.6c11.8-5,24.4-7.5,37.4-7.5
                            c13,0,25.6,2.5,37.4,7.5c11.4,4.8,21.7,11.8,30.5,20.6c8.8,8.8,15.8,19.1,20.6,30.5c5,11.8,7.5,24.4,7.5,37.4s-2.5,25.6-7.5,37.4
                            c-4.8,11.4-11.8,21.7-20.6,30.6c-8.8,8.8-19.1,15.8-30.5,20.6C547.7,615.7,535.1,618.2,522.1,618.2z"
        />
        <path
          className="st7"
          d="M522.1,537.2c-2,0-4-0.4-5.9-1.2c-1.8-0.8-3.4-1.8-4.8-3.2c-1.4-1.4-2.5-3-3.2-4.8c-0.8-1.9-1.2-3.8-1.2-5.9
                            s0.4-4,1.2-5.9c0.8-1.8,1.8-3.4,3.2-4.8c1.4-1.4,3-2.5,4.8-3.2c1.9-0.8,3.8-1.2,5.9-1.2c2.1,0,4,0.4,5.9,1.2
                            c1.8,0.8,3.4,1.8,4.8,3.2s2.5,3,3.2,4.8c0.8,1.9,1.2,3.8,1.2,5.9c0,2-0.4,4-1.2,5.9c-0.8,1.8-1.8,3.4-3.2,4.8
                            c-1.4,1.4-3,2.5-4.8,3.2C526.1,536.8,524.1,537.2,522.1,537.2z"
        />
      </g>
      <g>
        <g>
          <rect
            xmlns="http://www.w3.org/2000/svg"
            x="324"
            y="254.7"
            className="st9"
            width="534.4"
            height="553.3"
          />
          <path
            className="st8"
            d="M52.9,1044.3h942.7c22.6,0,48.6-14.7,48.6-35.3V37.4c0-20.7-26-37.4-48.6-37.4L52.9,0C7.6,0,0,33.5,0,74.8
                                    l0,263.1c0,18.4,8.9,33.9,28.1,39.5c58.7,17.2,101.2,67,101.2,126.2s-42.6,109-101.2,126.2C8.9,635.5,0,650.9,0,669.3l0,302.3
                                    c0,41.2,7.6,72.6,52.9,72.6V1044.3z M842,725.4c-8,41-60,66.6-117,57.4c-54.4-8.8-82.5-28-84.7-80.8l-0.5-6.5V503.1
                                    c0-17-14.5-34.3-32.5-38.7l-204.4-50.2c-17.9-4.4-32.5,5.7-32.5,22.7v141.4c33.7-9.9,51.2-13.8,79.1-9.3c57,9.3,98.3,50,90.3,90.9
                                    c-7.9,41-58.3,66.6-115.3,57.4c-54.3-8.8-87.7-37.4-87.7-84.3c0-1,0-237.9,0-237.9v-90.8c0,0,0-8.1,0-18.2s14.6-14.8,32.6-10.5
                                    L641,339.7c18,4.2,31.6,9.7,32.6,18.9v11.2v113.7V644c33.7-9.9,50.6-13.8,78.6-9.3C809.2,643.9,850.2,684.6,842,725.4z"
          />
        </g>
      </g>
    </svg>
  );
};

export default Records;