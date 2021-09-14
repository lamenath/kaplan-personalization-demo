import React from 'react'
import { RichText } from 'prismic-reactjs'

const HeroBanner = ({ slice }) => (
  <section>
    <div id="DIV_1">
      <div id="DIV_2">
        <a href="https://www.made.com/looks/calling-all-comfort-seekers" id="A_3"></a>
        <div id="DIV_4">
          <img width="1440" height="730" src="https://img.made.com/image/upload/c_pad,d_madeplusgrey.svg,dpr_1,f_auto,q_auto:good,w_1920/v1/mws-critical/20b6b52b-e239-4d68-a586-3df46bfbe22f_LVGSEP21-SITE-HERO-Desktop-1X1_1440x1440_WK_1.jpg" id="IMG_5" alt='' /><img width="375" height="450" src="https://img.made.com/image/upload/c_pad,d_madeplusgrey.svg,dpr_1,f_auto,q_auto:good,w_600/v1/mws-critical/d1a20a47-8c02-4838-b8e9-30f920c9d47c_LVGSEP21-SITE-HERO-Mobile-5X6_1200x1440_WK_1_v02.jpg" id="IMG_6" alt='' />
        </div>
        <div id="DIV_7">
          <h2 id="H2_8">
            { slice.primary.title }
          </h2>
          <div id="DIV_9">
            <p id="P_10">
            { slice.primary.description }
            </p>
          </div>
          <div id="DIV_11">
            <a href="https://www.made.com/looks/calling-all-comfort-seekers" id="A_12">Shop living room</a>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
        #DIV_1 {
          block-size: 517.5px;
          border-block-end-color: rgb(34, 35, 33);
          border-block-start-color: rgb(34, 35, 33);
          border-inline-end-color: rgb(34, 35, 33);
          border-inline-start-color: rgb(34, 35, 33);
          box-sizing: border-box;
          caret-color: rgb(34, 35, 33);
          clear: both;
          color: rgb(34, 35, 33);
          column-rule-color: rgb(34, 35, 33);
          font-family: "FS Meridian Regular", sans-serif;
          font-size: 16px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          height: 517.5px;
          inline-size: 1035px;
          line-height: 24px;
          max-inline-size: 1920px;
          max-width: 1920px;
          perspective-origin: 517.5px 258.75px;
          text-decoration: none solid rgb(34, 35, 33);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 517.5px 258.75px;
          width: 1035px;
          border: 0px none rgb(34, 35, 33);
          outline: rgb(34, 35, 33) none 0px;
          overflow: hidden;
      }/*#DIV_1*/
      
      #DIV_1:after {
          border-block-end-color: rgb(34, 35, 33);
          border-block-start-color: rgb(34, 35, 33);
          border-inline-end-color: rgb(34, 35, 33);
          border-inline-start-color: rgb(34, 35, 33);
          caret-color: rgb(34, 35, 33);
          color: rgb(34, 35, 33);
          column-rule-color: rgb(34, 35, 33);
          font-family: "FS Meridian Regular", sans-serif;
          font-size: 16px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          line-height: 24px;
          text-decoration: none solid rgb(34, 35, 33);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          border: 0px none rgb(34, 35, 33);
          outline: rgb(34, 35, 33) none 0px;
      }/*#DIV_1:after*/
      
      #DIV_1:before {
          border-block-end-color: rgb(34, 35, 33);
          border-block-start-color: rgb(34, 35, 33);
          border-inline-end-color: rgb(34, 35, 33);
          border-inline-start-color: rgb(34, 35, 33);
          caret-color: rgb(34, 35, 33);
          color: rgb(34, 35, 33);
          column-rule-color: rgb(34, 35, 33);
          font-family: "FS Meridian Regular", sans-serif;
          font-size: 16px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          line-height: 24px;
          text-decoration: none solid rgb(34, 35, 33);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          border: 0px none rgb(34, 35, 33);
          outline: rgb(34, 35, 33) none 0px;
      }/*#DIV_1:before*/
      
      #DIV_2 {
          block-size: 517.5px;
          border-block-end-color: rgb(34, 35, 33);
          border-block-start-color: rgb(34, 35, 33);
          border-inline-end-color: rgb(34, 35, 33);
          border-inline-start-color: rgb(34, 35, 33);
          bottom: 0px;
          box-sizing: border-box;
          caret-color: rgb(34, 35, 33);
          color: rgb(34, 35, 33);
          column-rule-color: rgb(34, 35, 33);
          font-family: "FS Meridian Regular", sans-serif;
          font-size: 16px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          height: 517.5px;
          inline-size: 1035px;
          inset-block-end: 0px;
          inset-block-start: 0px;
          inset-inline-end: 0px;
          inset-inline-start: 0px;
          left: 0px;
          line-height: 20px;
          perspective-origin: 517.5px 258.75px;
          position: relative;
          right: 0px;
          text-decoration: none solid rgb(34, 35, 33);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          top: 0px;
          transform-origin: 517.5px 258.75px;
          width: 1035px;
          border: 0px none rgb(34, 35, 33);
          outline: rgb(34, 35, 33) none 0px;
      }/*#DIV_2*/
      
      #DIV_2:after {
          border-block-end-color: rgb(34, 35, 33);
          border-block-start-color: rgb(34, 35, 33);
          border-inline-end-color: rgb(34, 35, 33);
          border-inline-start-color: rgb(34, 35, 33);
          caret-color: rgb(34, 35, 33);
          color: rgb(34, 35, 33);
          column-rule-color: rgb(34, 35, 33);
          font-family: "FS Meridian Regular", sans-serif;
          font-size: 16px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          line-height: 20px;
          text-decoration: none solid rgb(34, 35, 33);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          border: 0px none rgb(34, 35, 33);
          outline: rgb(34, 35, 33) none 0px;
      }/*#DIV_2:after*/
      
      #DIV_2:before {
          border-block-end-color: rgb(34, 35, 33);
          border-block-start-color: rgb(34, 35, 33);
          border-inline-end-color: rgb(34, 35, 33);
          border-inline-start-color: rgb(34, 35, 33);
          caret-color: rgb(34, 35, 33);
          color: rgb(34, 35, 33);
          column-rule-color: rgb(34, 35, 33);
          font-family: "FS Meridian Regular", sans-serif;
          font-size: 16px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          line-height: 20px;
          text-decoration: none solid rgb(34, 35, 33);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          border: 0px none rgb(34, 35, 33);
          outline: rgb(34, 35, 33) none 0px;
      }/*#DIV_2:before*/
      
      #A_3 {
          block-size: 517.5px;
          border-block-end-color: rgb(34, 35, 33);
          border-block-start-color: rgb(34, 35, 33);
          border-inline-end-color: rgb(34, 35, 33);
          border-inline-start-color: rgb(34, 35, 33);
          bottom: 0px;
          box-sizing: border-box;
          caret-color: rgb(34, 35, 33);
          color: rgb(34, 35, 33);
          column-rule-color: rgb(34, 35, 33);
          display: flex;
          font-family: "FS Meridian Regular", sans-serif;
          font-size: 16px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          height: 517.5px;
          inline-size: 1035px;
          inset-block-end: 0px;
          inset-block-start: 0px;
          inset-inline-end: 0px;
          inset-inline-start: 0px;
          left: 0px;
          line-height: 20px;
          perspective-origin: 517.5px 258.75px;
          position: absolute;
          right: 0px;
          text-decoration: none solid rgb(34, 35, 33);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          top: 0px;
          transform-origin: 517.5px 258.75px;
          width: 1035px;
          z-index: 1008;
          border: 0px none rgb(34, 35, 33);
          outline: rgb(34, 35, 33) none 0px;
      }/*#A_3*/
      
      #A_3:after {
          border-block-end-color: rgb(34, 35, 33);
          border-block-start-color: rgb(34, 35, 33);
          border-inline-end-color: rgb(34, 35, 33);
          border-inline-start-color: rgb(34, 35, 33);
          caret-color: rgb(34, 35, 33);
          color: rgb(34, 35, 33);
          column-rule-color: rgb(34, 35, 33);
          display: block;
          font-family: "FS Meridian Regular", sans-serif;
          font-size: 16px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          line-height: 20px;
          text-decoration: none solid rgb(34, 35, 33);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          border: 0px none rgb(34, 35, 33);
          outline: rgb(34, 35, 33) none 0px;
      }/*#A_3:after*/
      
      #A_3:before {
          border-block-end-color: rgb(34, 35, 33);
          border-block-start-color: rgb(34, 35, 33);
          border-inline-end-color: rgb(34, 35, 33);
          border-inline-start-color: rgb(34, 35, 33);
          caret-color: rgb(34, 35, 33);
          color: rgb(34, 35, 33);
          column-rule-color: rgb(34, 35, 33);
          display: block;
          font-family: "FS Meridian Regular", sans-serif;
          font-size: 16px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          line-height: 20px;
          text-decoration: none solid rgb(34, 35, 33);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          border: 0px none rgb(34, 35, 33);
          outline: rgb(34, 35, 33) none 0px;
      }/*#A_3:before*/
      
      #DIV_4 {
          block-size: 517.5px;
          border-block-end-color: rgb(34, 35, 33);
          border-block-start-color: rgb(34, 35, 33);
          border-inline-end-color: rgb(34, 35, 33);
          border-inline-start-color: rgb(34, 35, 33);
          box-sizing: border-box;
          caret-color: rgb(34, 35, 33);
          color: rgb(34, 35, 33);
          column-rule-color: rgb(34, 35, 33);
          font-family: "FS Meridian Regular", sans-serif;
          font-size: 16px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          height: 517.5px;
          inline-size: 1035px;
          line-height: 0px;
          perspective-origin: 517.5px 258.75px;
          text-decoration: none solid rgb(34, 35, 33);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 517.5px 258.75px;
          width: 1035px;
          border: 0px none rgb(34, 35, 33);
          outline: rgb(34, 35, 33) none 0px;
      }/*#DIV_4*/
      
      #DIV_4:after {
          border-block-end-color: rgb(34, 35, 33);
          border-block-start-color: rgb(34, 35, 33);
          border-inline-end-color: rgb(34, 35, 33);
          border-inline-start-color: rgb(34, 35, 33);
          caret-color: rgb(34, 35, 33);
          color: rgb(34, 35, 33);
          column-rule-color: rgb(34, 35, 33);
          font-family: "FS Meridian Regular", sans-serif;
          font-size: 16px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          line-height: 0px;
          text-decoration: none solid rgb(34, 35, 33);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          border: 0px none rgb(34, 35, 33);
          outline: rgb(34, 35, 33) none 0px;
      }/*#DIV_4:after*/
      
      #DIV_4:before {
          border-block-end-color: rgb(34, 35, 33);
          border-block-start-color: rgb(34, 35, 33);
          border-inline-end-color: rgb(34, 35, 33);
          border-inline-start-color: rgb(34, 35, 33);
          caret-color: rgb(34, 35, 33);
          color: rgb(34, 35, 33);
          column-rule-color: rgb(34, 35, 33);
          font-family: "FS Meridian Regular", sans-serif;
          font-size: 16px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          line-height: 0px;
          text-decoration: none solid rgb(34, 35, 33);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          border: 0px none rgb(34, 35, 33);
          outline: rgb(34, 35, 33) none 0px;
      }/*#DIV_4:before*/
      
      #IMG_5 {
          block-size: 517.5px;
          border-block-end-color: rgb(34, 35, 33);
          border-block-start-color: rgb(34, 35, 33);
          border-inline-end-color: rgb(34, 35, 33);
          border-inline-start-color: rgb(34, 35, 33);
          box-sizing: border-box;
          caret-color: rgb(34, 35, 33);
          color: rgb(34, 35, 33);
          column-rule-color: rgb(34, 35, 33);
          display: inline-block;
          font-family: "object-fit: cover;";
          font-size: 16px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          height: 517.5px;
          inline-size: 1035px;
          line-height: 20px;
          object-fit: cover;
          object-position: 0px 50%;
          perspective-origin: 517.5px 258.75px;
          text-decoration: none solid rgb(34, 35, 33);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 517.5px 258.75px;
          width: 1035px;
          border: 0px none rgb(34, 35, 33);
          outline: rgb(34, 35, 33) none 0px;
      }/*#IMG_5*/
      
      #IMG_5:after {
          border-block-end-color: rgb(34, 35, 33);
          border-block-start-color: rgb(34, 35, 33);
          border-inline-end-color: rgb(34, 35, 33);
          border-inline-start-color: rgb(34, 35, 33);
          caret-color: rgb(34, 35, 33);
          color: rgb(34, 35, 33);
          column-rule-color: rgb(34, 35, 33);
          font-family: "object-fit: cover;";
          font-size: 16px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          line-height: 20px;
          text-decoration: none solid rgb(34, 35, 33);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          border: 0px none rgb(34, 35, 33);
          outline: rgb(34, 35, 33) none 0px;
      }/*#IMG_5:after*/
      
      #IMG_5:before {
          border-block-end-color: rgb(34, 35, 33);
          border-block-start-color: rgb(34, 35, 33);
          border-inline-end-color: rgb(34, 35, 33);
          border-inline-start-color: rgb(34, 35, 33);
          caret-color: rgb(34, 35, 33);
          color: rgb(34, 35, 33);
          column-rule-color: rgb(34, 35, 33);
          font-family: "object-fit: cover;";
          font-size: 16px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          line-height: 20px;
          text-decoration: none solid rgb(34, 35, 33);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          border: 0px none rgb(34, 35, 33);
          outline: rgb(34, 35, 33) none 0px;
      }/*#IMG_5:before*/
      
      #IMG_6 {
          border-block-end-color: rgb(34, 35, 33);
          border-block-start-color: rgb(34, 35, 33);
          border-inline-end-color: rgb(34, 35, 33);
          border-inline-start-color: rgb(34, 35, 33);
          box-sizing: border-box;
          caret-color: rgb(34, 35, 33);
          color: rgb(34, 35, 33);
          column-rule-color: rgb(34, 35, 33);
          display: none;
          font-family: "object-fit: cover;";
          font-size: 16px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          inline-size: 100%;
          line-height: 20px;
          object-fit: cover;
          text-decoration: none solid rgb(34, 35, 33);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          width: 100%;
          border: 0px none rgb(34, 35, 33);
          outline: rgb(34, 35, 33) none 0px;
      }/*#IMG_6*/
      
      #IMG_6:after {
          border-block-end-color: rgb(34, 35, 33);
          border-block-start-color: rgb(34, 35, 33);
          border-inline-end-color: rgb(34, 35, 33);
          border-inline-start-color: rgb(34, 35, 33);
          caret-color: rgb(34, 35, 33);
          color: rgb(34, 35, 33);
          column-rule-color: rgb(34, 35, 33);
          font-family: "object-fit: cover;";
          font-size: 16px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          line-height: 20px;
          text-decoration: none solid rgb(34, 35, 33);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          border: 0px none rgb(34, 35, 33);
          outline: rgb(34, 35, 33) none 0px;
      }/*#IMG_6:after*/
      
      #IMG_6:before {
          border-block-end-color: rgb(34, 35, 33);
          border-block-start-color: rgb(34, 35, 33);
          border-inline-end-color: rgb(34, 35, 33);
          border-inline-start-color: rgb(34, 35, 33);
          caret-color: rgb(34, 35, 33);
          color: rgb(34, 35, 33);
          column-rule-color: rgb(34, 35, 33);
          font-family: "object-fit: cover;";
          font-size: 16px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          line-height: 20px;
          text-decoration: none solid rgb(34, 35, 33);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          border: 0px none rgb(34, 35, 33);
          outline: rgb(34, 35, 33) none 0px;
      }/*#IMG_6:before*/
      
      #DIV_7 {
          block-size: 213px;
          border-block-end-color: rgb(34, 35, 33);
          border-block-start-color: rgb(34, 35, 33);
          border-inline-end-color: rgb(34, 35, 33);
          border-inline-start-color: rgb(34, 35, 33);
          bottom: 149.25px;
          box-sizing: border-box;
          caret-color: rgb(34, 35, 33);
          color: rgb(34, 35, 33);
          column-rule-color: rgb(34, 35, 33);
          font-family: "FS Meridian Regular", sans-serif;
          font-size: 16px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          height: 213px;
          inline-size: 1035px;
          inset-block-end: 149.25px;
          inset-block-start: 155.25px;
          inset-inline-end: -517.5px;
          inset-inline-start: 517.5px;
          left: 517.5px;
          line-height: 40px;
          padding-inline-end: 98px;
          padding-inline-start: 98px;
          perspective-origin: 517.5px 106.5px;
          position: absolute;
          right: -517.5px;
          text-decoration: none solid rgb(34, 35, 33);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          top: 155.25px;
          transform: matrix(1, 0, 0, 1, -517.5, -106.5);
          transform-origin: 517.5px 106.5px;
          width: 1035px;
          z-index: 1007;
          border: 0px none rgb(34, 35, 33);
          outline: rgb(34, 35, 33) none 0px;
          overflow: hidden;
          padding: 0px 98px;
      }/*#DIV_7*/
      
      #DIV_7:after {
          border-block-end-color: rgb(34, 35, 33);
          border-block-start-color: rgb(34, 35, 33);
          border-inline-end-color: rgb(34, 35, 33);
          border-inline-start-color: rgb(34, 35, 33);
          caret-color: rgb(34, 35, 33);
          color: rgb(34, 35, 33);
          column-rule-color: rgb(34, 35, 33);
          font-family: "FS Meridian Regular", sans-serif;
          font-size: 16px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          line-height: 40px;
          text-decoration: none solid rgb(34, 35, 33);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          border: 0px none rgb(34, 35, 33);
          outline: rgb(34, 35, 33) none 0px;
      }/*#DIV_7:after*/
      
      #DIV_7:before {
          border-block-end-color: rgb(34, 35, 33);
          border-block-start-color: rgb(34, 35, 33);
          border-inline-end-color: rgb(34, 35, 33);
          border-inline-start-color: rgb(34, 35, 33);
          caret-color: rgb(34, 35, 33);
          color: rgb(34, 35, 33);
          column-rule-color: rgb(34, 35, 33);
          font-family: "FS Meridian Regular", sans-serif;
          font-size: 16px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          line-height: 40px;
          text-decoration: none solid rgb(34, 35, 33);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          border: 0px none rgb(34, 35, 33);
          outline: rgb(34, 35, 33) none 0px;
      }/*#DIV_7:before*/
      
      #H2_8 {
          block-size: 136px;
          border-block-end-color: rgb(255, 255, 255);
          border-block-start-color: rgb(255, 255, 255);
          border-inline-end-color: rgb(255, 255, 255);
          border-inline-start-color: rgb(255, 255, 255);
          box-sizing: border-box;
          caret-color: rgb(255, 255, 255);
          clear: both;
          color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          float: left;
          font-family: "FS Meridian Medium", sans-serif;
          font-size: 48px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          font-weight: 500;
          height: 136px;
          inline-size: 530px;
          line-height: 60px;
          margin-block-end: 0px;
          margin-block-start: 0px;
          padding-block-end: 16px;
          perspective-origin: 265px 68px;
          text-align: left;
          text-decoration: none solid rgb(255, 255, 255);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 265px 68px;
          width: 530px;
          word-break: break-word;
          border: 0px none rgb(255, 255, 255);
          margin: 0px;
          outline: rgb(255, 255, 255) none 0px;
          padding: 0px 0px 16px;
      }/*#H2_8*/
      
      #H2_8:after {
          border-block-end-color: rgb(255, 255, 255);
          border-block-start-color: rgb(255, 255, 255);
          border-inline-end-color: rgb(255, 255, 255);
          border-inline-start-color: rgb(255, 255, 255);
          caret-color: rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          font-family: "FS Meridian Medium", sans-serif;
          font-size: 48px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          font-weight: 500;
          line-height: 60px;
          text-align: left;
          text-decoration: none solid rgb(255, 255, 255);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          word-break: break-word;
          border: 0px none rgb(255, 255, 255);
          outline: rgb(255, 255, 255) none 0px;
      }/*#H2_8:after*/
      
      #H2_8:before {
          border-block-end-color: rgb(255, 255, 255);
          border-block-start-color: rgb(255, 255, 255);
          border-inline-end-color: rgb(255, 255, 255);
          border-inline-start-color: rgb(255, 255, 255);
          caret-color: rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          font-family: "FS Meridian Medium", sans-serif;
          font-size: 48px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          font-weight: 500;
          line-height: 60px;
          text-align: left;
          text-decoration: none solid rgb(255, 255, 255);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          word-break: break-word;
          border: 0px none rgb(255, 255, 255);
          outline: rgb(255, 255, 255) none 0px;
      }/*#H2_8:before*/
      
      #DIV_9 {
          block-size: 46px;
          border-block-end-color: rgb(255, 255, 255);
          border-block-start-color: rgb(255, 255, 255);
          border-inline-end-color: rgb(255, 255, 255);
          border-inline-start-color: rgb(255, 255, 255);
          box-sizing: border-box;
          caret-color: rgb(255, 255, 255);
          clear: both;
          color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          float: left;
          font-family: "FS Meridian Regular", sans-serif;
          font-size: 20px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          height: 46px;
          inline-size: 374px;
          line-height: 30px;
          padding-block-end: 16px;
          perspective-origin: 187px 23px;
          text-align: left;
          text-decoration: none solid rgb(255, 255, 255);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 187px 23px;
          width: 374px;
          border: 0px none rgb(255, 255, 255);
          outline: rgb(255, 255, 255) none 0px;
          padding: 0px 0px 16px;
      }/*#DIV_9*/
      
      #DIV_9:after {
          border-block-end-color: rgb(255, 255, 255);
          border-block-start-color: rgb(255, 255, 255);
          border-inline-end-color: rgb(255, 255, 255);
          border-inline-start-color: rgb(255, 255, 255);
          caret-color: rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          font-family: "FS Meridian Regular", sans-serif;
          font-size: 20px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          line-height: 30px;
          text-align: left;
          text-decoration: none solid rgb(255, 255, 255);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          border: 0px none rgb(255, 255, 255);
          outline: rgb(255, 255, 255) none 0px;
      }/*#DIV_9:after*/
      
      #DIV_9:before {
          border-block-end-color: rgb(255, 255, 255);
          border-block-start-color: rgb(255, 255, 255);
          border-inline-end-color: rgb(255, 255, 255);
          border-inline-start-color: rgb(255, 255, 255);
          caret-color: rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          font-family: "FS Meridian Regular", sans-serif;
          font-size: 20px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          line-height: 30px;
          text-align: left;
          text-decoration: none solid rgb(255, 255, 255);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          border: 0px none rgb(255, 255, 255);
          outline: rgb(255, 255, 255) none 0px;
      }/*#DIV_9:before*/
      
      #P_10 {
          block-size: 30px;
          border-block-end-color: rgb(255, 255, 255);
          border-block-start-color: rgb(255, 255, 255);
          border-inline-end-color: rgb(255, 255, 255);
          border-inline-start-color: rgb(255, 255, 255);
          box-sizing: border-box;
          caret-color: rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          font-family: "FS Meridian Regular", sans-serif;
          font-size: 20px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          height: 30px;
          inline-size: 374px;
          line-height: 30px;
          margin-block-end: 0px;
          margin-block-start: 0px;
          perspective-origin: 187px 15px;
          text-align: left;
          text-decoration: none solid rgb(255, 255, 255);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 187px 15px;
          width: 374px;
          word-break: break-word;
          border: 0px none rgb(255, 255, 255);
          margin: 0px;
          outline: rgb(255, 255, 255) none 0px;
      }/*#P_10*/
      
      #P_10:after {
          border-block-end-color: rgb(255, 255, 255);
          border-block-start-color: rgb(255, 255, 255);
          border-inline-end-color: rgb(255, 255, 255);
          border-inline-start-color: rgb(255, 255, 255);
          caret-color: rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          font-family: "FS Meridian Regular", sans-serif;
          font-size: 20px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          line-height: 30px;
          text-align: left;
          text-decoration: none solid rgb(255, 255, 255);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          word-break: break-word;
          border: 0px none rgb(255, 255, 255);
          outline: rgb(255, 255, 255) none 0px;
      }/*#P_10:after*/
      
      #P_10:before {
          border-block-end-color: rgb(255, 255, 255);
          border-block-start-color: rgb(255, 255, 255);
          border-inline-end-color: rgb(255, 255, 255);
          border-inline-start-color: rgb(255, 255, 255);
          caret-color: rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          font-family: "FS Meridian Regular", sans-serif;
          font-size: 20px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          line-height: 30px;
          text-align: left;
          text-decoration: none solid rgb(255, 255, 255);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          word-break: break-word;
          border: 0px none rgb(255, 255, 255);
          outline: rgb(255, 255, 255) none 0px;
      }/*#P_10:before*/
      
      #DIV_11 {
          block-size: 31px;
          border-block-end-color: rgb(255, 255, 255);
          border-block-start-color: rgb(255, 255, 255);
          border-inline-end-color: rgb(255, 255, 255);
          border-inline-start-color: rgb(255, 255, 255);
          box-sizing: border-box;
          caret-color: rgb(255, 255, 255);
          clear: both;
          color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          float: left;
          font-family: "FS Meridian Regular", sans-serif;
          font-size: 16px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          height: 31px;
          inline-size: 158.734px;
          line-height: 20px;
          perspective-origin: 79.3594px 15.5px;
          text-align: left;
          text-decoration: none solid rgb(255, 255, 255);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 79.3672px 15.5px;
          width: 158.734px;
          border: 0px none rgb(255, 255, 255);
          outline: rgb(255, 255, 255) none 0px;
      }/*#DIV_11*/
      
      #DIV_11:after {
          border-block-end-color: rgb(255, 255, 255);
          border-block-start-color: rgb(255, 255, 255);
          border-inline-end-color: rgb(255, 255, 255);
          border-inline-start-color: rgb(255, 255, 255);
          caret-color: rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          font-family: "FS Meridian Regular", sans-serif;
          font-size: 16px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          line-height: 20px;
          text-align: left;
          text-decoration: none solid rgb(255, 255, 255);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          border: 0px none rgb(255, 255, 255);
          outline: rgb(255, 255, 255) none 0px;
      }/*#DIV_11:after*/
      
      #DIV_11:before {
          border-block-end-color: rgb(255, 255, 255);
          border-block-start-color: rgb(255, 255, 255);
          border-inline-end-color: rgb(255, 255, 255);
          border-inline-start-color: rgb(255, 255, 255);
          caret-color: rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          font-family: "FS Meridian Regular", sans-serif;
          font-size: 16px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          line-height: 20px;
          text-align: left;
          text-decoration: none solid rgb(255, 255, 255);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          border: 0px none rgb(255, 255, 255);
          outline: rgb(255, 255, 255) none 0px;
      }/*#DIV_11:before*/
      
      #A_12 {
          block-size: 31px;
          border-block-end-color: rgb(255, 255, 255);
          border-block-end-style: solid;
          border-block-end-width: 1px;
          border-block-start-color: rgb(255, 255, 255);
          border-inline-end-color: rgb(255, 255, 255);
          border-inline-start-color: rgb(255, 255, 255);
          box-sizing: border-box;
          caret-color: rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          display: inline-block;
          font-family: "FS Meridian Medium", sans-serif;
          font-size: 20px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          font-weight: 500;
          height: 31px;
          inline-size: 158.734px;
          line-height: 30px;
          perspective-origin: 79.3594px 15.5px;
          text-align: left;
          text-decoration: none solid rgb(255, 255, 255);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 79.3672px 15.5px;
          width: 158.734px;
          border-top: 0px none rgb(255, 255, 255);
          border-right: 0px none rgb(255, 255, 255);
          border-bottom: 1px solid rgb(255, 255, 255);
          border-left: 0px none rgb(255, 255, 255);
          outline: rgb(255, 255, 255) none 0px;
      }/*#A_12*/
      
      #A_12:after {
          border-block-end-color: rgb(255, 255, 255);
          border-block-start-color: rgb(255, 255, 255);
          border-inline-end-color: rgb(255, 255, 255);
          border-inline-start-color: rgb(255, 255, 255);
          caret-color: rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          font-family: "FS Meridian Medium", sans-serif;
          font-size: 20px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          font-weight: 500;
          line-height: 30px;
          text-align: left;
          text-decoration: none solid rgb(255, 255, 255);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          border: 0px none rgb(255, 255, 255);
          outline: rgb(255, 255, 255) none 0px;
      }/*#A_12:after*/
      
      #A_12:before {
          border-block-end-color: rgb(255, 255, 255);
          border-block-start-color: rgb(255, 255, 255);
          border-inline-end-color: rgb(255, 255, 255);
          border-inline-start-color: rgb(255, 255, 255);
          caret-color: rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          font-family: "FS Meridian Medium", sans-serif;
          font-size: 20px;
          font-variant: no-common-ligatures;
          font-variant-ligatures: no-common-ligatures;
          font-weight: 500;
          line-height: 30px;
          text-align: left;
          text-decoration: none solid rgb(255, 255, 255);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          border: 0px none rgb(255, 255, 255);
          outline: rgb(255, 255, 255) none 0px;
      }/*#A_12:before*/      
    `}</style>
  </section>
)

export default HeroBanner