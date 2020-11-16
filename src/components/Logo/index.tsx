import * as S from './styles'

export type LogoProps = {
  color?: 'black' | 'white'
  size?: 'normal' | 'large'
  hideOnMobile?: boolean
}

const Logo = ({
  color = 'black',
  size = 'normal',
  hideOnMobile = false
}: LogoProps) => (
  <S.Wrapper color={color} size={size} hideOnMobile={hideOnMobile}>
    <svg
      width="126.579"
      height="111.409"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 847.07 745.55"
      role="img"
      aria-label="DI Center - Sinform"
    >
      <path
        fill="currentColor"
        d="M182.95 0h-19.3l.05 121.38c129.03 19.73 184.4 146.9 137.23 243.02-17.56 35.77-45.04 64.36-80.68 82.08-52.63 26.16-56.51 3.36-56.6 27.38C357.61 466.18 460.12 228 329.53 80.24c-15.76-17.84-38.94-37.66-62.78-50.71C218.46 3.09 199.62 7.63 182.95 0z"
      />
      <path
        fill="currentColor"
        d="M163.66 432.06c67.59-7.56 124.57-61.78 125.11-134.4.56-74.07-56.8-130-125.02-136.94l-.09 271.34zM133.29 472.99l.07-14.73c-22.04-12.31-26.67-1.62-60.71-35.46-48.87-48.59-27.99-156.86 60.86-178.34l.02-81.58C61.88 170.97.53 238.34 0 316.92c-.55 82.3 60.32 144.43 133.29 156.07z"
      />
      <path
        className="text"
        fill="currentColor"
        d="M34.64 638.72V517.25H69.3c18.39 0 33.7 5.35 45.91 16.06 12.21 10.73 18.31 25.11 18.31 43.15 0 18.82-6.1 33.89-18.31 45.24-12.21 11.35-27.92 17.02-47.17 17.02H34.63zm15.69-107.53v93.63h17.64c15.42 0 27.47-4.2 36.11-12.61 8.64-8.43 12.98-20.21 12.98-35.39 0-15.15-4.44-26.55-13.33-34.18-8.89-7.63-20.58-11.45-35.07-11.45H50.33zM172.65 517.24v121.48h-15.68V517.24zM334.81 633.68c-8.94 4.71-20.16 7.07-33.62 7.07-17.42 0-31.32-5.51-41.73-16.57-10.41-11.08-15.61-25.7-15.61-43.9 0-19.54 5.86-35.28 17.56-47.19 11.72-11.94 26.58-17.88 44.62-17.88 11.62 0 21.2 1.63 28.78 4.93v16.41c-8.67-4.82-18.2-7.23-28.61-7.23-13.55 0-24.57 4.52-33.09 13.52-8.54 9.02-12.8 21.2-12.8 36.51 0 14.54 3.99 26.07 11.94 34.64 7.92 8.54 18.33 12.82 31.21 12.82 12.02 0 22.46-2.73 31.34-8.16v15.04zM424.46 638.72h-65.32V517.24h62.59v13.95h-46.9v38.89h43.44v13.9h-43.44v40.84h49.63zM546.65 638.72h-18.58l-61.11-94.49c-1.71-2.68-3.11-5.33-4.15-7.92h-.46c.4 2.7.61 8.38.61 17.02v85.39h-15.52V517.25h19.68l59.45 92.86c2.81 4.39 4.5 7.18 5.01 8.38h.32c-.51-3.45-.78-9.34-.78-17.72v-83.52h15.53v121.47zM651.42 531.19h-35.04v107.53h-15.76V531.19h-34.91v-13.95h85.71zM735.39 638.72h-65.31V517.24h62.58v13.95h-46.89v38.89h43.44v13.9h-43.44v40.84h49.62zM847.07 638.72h-18.5l-20.16-33.73c-4.01-6.75-7.71-11.32-11.06-13.76-3.35-2.44-7.33-3.64-11.99-3.64h-11.3v51.13h-15.69V517.25h37.02c11.8 0 21.07 2.84 27.76 8.54 6.69 5.7 10.04 13.68 10.04 23.93 0 16.84-8.99 27.76-26.98 32.76v.4c3.35 1.42 6.24 3.43 8.67 6.05 2.44 2.6 5.57 7.07 9.45 13.41l22.73 36.38zm-72.99-107.74v42.88h18.5c7.17 0 12.98-2.09 17.45-6.26 4.47-4.2 6.72-9.69 6.72-16.46 0-6.34-2.06-11.27-6.13-14.83-4.07-3.56-10.01-5.33-17.8-5.33h-18.74zM81.64 708.35c0 3.13-.59 5.9-1.78 8.29-1.18 2.4-2.78 4.37-4.79 5.91-2.37 1.86-4.96 3.19-7.81 3.98-2.83.79-6.43 1.18-10.8 1.18H34.11v-62.92h18.67c4.6 0 8.04.17 10.33.5 2.28.35 4.47 1.04 6.55 2.11 2.32 1.21 4 2.77 5.03 4.67 1.05 1.89 1.57 4.17 1.57 6.81 0 2.97-.76 5.51-2.28 7.62-1.53 2.09-3.56 3.78-6.1 5.05v.35c4.25.87 7.62 2.74 10.07 5.6 2.45 2.87 3.68 6.48 3.68 10.85zm-14.11-28.29c0-1.5-.26-2.77-.76-3.81-.51-1.02-1.31-1.86-2.45-2.51-1.31-.75-2.93-1.23-4.82-1.4-1.87-.19-4.21-.28-7.01-.28h-9.97v18h10.82c2.61 0 4.7-.13 6.25-.4 1.56-.26 2.98-.81 4.31-1.64 1.33-.84 2.26-1.92 2.81-3.25.55-1.33.82-2.9.82-4.72zm5.37 28.58c0-2.51-.38-4.51-1.14-6-.76-1.48-2.13-2.75-4.14-3.78-1.36-.71-3-1.17-4.92-1.37-1.93-.21-4.28-.32-7.04-.32H42.52v23.28h11.06c3.66 0 6.66-.19 9-.56 2.34-.39 4.25-1.08 5.75-2.09 1.57-1.08 2.73-2.34 3.46-3.74.74-1.4 1.1-3.2 1.1-5.42zM131.97 727.72h-7.96v-5.25c-2.68 2.12-5.25 3.74-7.7 4.86-2.47 1.13-5.16 1.69-8.13 1.69-4.96 0-8.84-1.52-11.6-4.54-2.77-3.01-4.15-7.46-4.15-13.31v-30.61h7.96v26.87c0 2.39.12 4.44.33 6.14.23 1.7.71 3.16 1.44 4.37.77 1.24 1.76 2.13 2.97 2.7 1.21.56 2.97.85 5.29.85 2.06 0 4.31-.53 6.75-1.6 2.44-1.07 4.72-2.44 6.84-4.1v-35.24h7.96v47.17zM181.28 714.03c0 4.3-1.77 7.83-5.34 10.59-3.56 2.75-8.42 4.14-14.6 4.14-3.49 0-6.69-.42-9.61-1.24-2.91-.84-5.35-1.75-7.33-2.74v-8.92h.42c2.5 1.9 5.28 3.42 8.34 4.54 3.06 1.13 5.98 1.69 8.78 1.69 3.48 0 6.2-.56 8.16-1.7 1.96-1.13 2.94-2.91 2.94-5.35 0-1.86-.53-3.26-1.6-4.21-1.07-.97-3.12-1.78-6.14-2.45-1.13-.26-2.6-.55-4.4-.9-1.82-.33-3.46-.69-4.96-1.1-4.13-1.1-7.05-2.7-8.77-4.83-1.73-2.12-2.6-4.73-2.6-7.82 0-1.95.4-3.78 1.21-5.5.79-1.71 2.02-3.25 3.66-4.6 1.57-1.31 3.58-2.36 6.03-3.14 2.44-.76 5.16-1.15 8.18-1.15 2.83 0 5.68.34 8.58 1.04 2.89.68 5.29 1.52 7.21 2.51v8.48h-.42c-2.03-1.5-4.49-2.77-7.39-3.81-2.9-1.04-5.74-1.56-8.52-1.56-2.89 0-5.34.56-7.33 1.67-2 1.13-3 2.78-3 5.01 0 1.93.61 3.4 1.82 4.39 1.17.98 3.09 1.79 5.73 2.41 1.46.33 3.09.67 4.9 1.01 1.8.33 3.32.65 4.53.92 3.68.85 6.51 2.29 8.51 4.34 1.99 2.09 2.98 4.85 2.98 8.28zM227.59 724.76c-2.64 1.25-5.16 2.24-7.54 2.94-2.36.71-4.9 1.05-7.57 1.05-3.4 0-6.53-.51-9.38-1.5-2.84-.99-5.28-2.51-7.3-4.54-2.06-2.02-3.65-4.59-4.77-7.69-1.13-3.09-1.69-6.71-1.69-10.85 0-7.72 2.12-13.77 6.36-18.16 4.23-4.4 9.82-6.59 16.78-6.59 2.7 0 5.35.37 7.96 1.14 2.6.75 4.99 1.69 7.16 2.78v8.8h-.42c-2.42-1.86-4.92-3.29-7.5-4.3-2.58-.99-5.09-1.5-7.54-1.5-4.5 0-8.06 1.52-10.66 4.53-2.61 3.01-3.91 7.46-3.91 13.3 0 5.67 1.27 10.04 3.82 13.08 2.55 3.05 6.13 4.57 10.74 4.57 1.62 0 3.25-.2 4.9-.62 1.66-.42 3.16-.97 4.47-1.63 1.16-.59 2.25-1.21 3.26-1.86 1.01-.65 1.82-1.21 2.41-1.69h.42v8.73zM274.5 727.72h-7.96v-5.05c-.71.48-1.65 1.15-2.84 2.01-1.2.87-2.35 1.54-3.48 2.06-1.33.65-2.84 1.18-4.56 1.63-1.7.43-3.72.65-6.01.65-4.24 0-7.85-1.41-10.79-4.23-2.96-2.83-4.43-6.42-4.43-10.79 0-3.59.77-6.49 2.29-8.7 1.53-2.22 3.72-3.97 6.56-5.24 2.86-1.27 6.3-2.12 10.31-2.58 4.02-.45 8.34-.78 12.94-1.01v-1.24c0-1.8-.32-3.32-.95-4.5a6.854 6.854 0 00-2.71-2.81c-1.13-.65-2.48-1.1-4.05-1.31-1.57-.23-3.21-.35-4.93-.35-2.08 0-4.4.27-6.95.84-2.57.56-5.21 1.38-7.93 2.45h-.42v-8.06c1.54-.42 3.79-.88 6.72-1.38 2.93-.51 5.81-.76 8.65-.76 3.33 0 6.22.27 8.69.82 2.47.55 4.6 1.48 6.4 2.81a12.42 12.42 0 014.05 5.03c.94 2.06 1.4 4.62 1.4 7.66v32.05zm-7.96-11.63v-13.21c-2.41.14-5.25.36-8.51.63-3.28.29-5.86.69-7.76 1.24-2.28.65-4.11 1.66-5.51 3.03-1.4 1.37-2.11 3.28-2.11 5.67 0 2.72.81 4.77 2.44 6.14s4.11 2.06 7.44 2.06c2.78 0 5.31-.55 7.62-1.63 2.29-1.1 4.43-2.41 6.39-3.94zM329.25 727.72h-7.96v-26.87c0-2.16-.13-4.2-.38-6.1-.26-1.9-.72-3.39-1.4-4.46-.71-1.18-1.73-2.06-3.06-2.64-1.33-.58-3.04-.87-5.16-.87-2.16 0-4.44.53-6.81 1.6-2.38 1.07-4.64 2.44-6.82 4.1v35.24h-7.96v-47.17h7.96v5.25c2.48-2.06 5.05-3.66 7.7-4.82 2.66-1.16 5.38-1.73 8.18-1.73 5.11 0 9 1.53 11.69 4.6 2.68 3.07 4.02 7.49 4.02 13.26v30.61zM382.81 727.72h-7.96v-4.95c-2.29 1.96-4.67 3.51-7.16 4.6-2.48 1.1-5.18 1.64-8.09 1.64-5.64 0-10.12-2.16-13.44-6.51-3.32-4.33-4.98-10.34-4.98-18.02 0-4 .58-7.56 1.72-10.67 1.14-3.13 2.68-5.78 4.63-7.99 1.92-2.13 4.17-3.77 6.72-4.89a19.39 19.39 0 017.93-1.69c2.48 0 4.69.26 6.61.78s3.94 1.33 6.06 2.42v-20.51h7.96v65.78zm-7.96-11.58v-27c-2.15-.95-4.07-1.62-5.76-1.98-1.7-.36-3.55-.55-5.55-.55-4.46 0-7.93 1.54-10.41 4.63-2.48 3.09-3.72 7.47-3.72 13.14 0 5.6.97 9.84 2.89 12.75 1.92 2.9 4.99 4.36 9.22 4.36 2.27 0 4.56-.5 6.87-1.5 2.31-.99 4.47-2.28 6.48-3.85zM438.64 704.15c0 7.69-1.98 13.75-5.92 18.2-3.94 4.44-9.22 6.66-15.82 6.66-6.68 0-11.97-2.22-15.91-6.66-3.92-4.46-5.89-10.51-5.89-18.2 0-7.67 1.96-13.75 5.89-18.2 3.94-4.46 9.23-6.69 15.91-6.69 6.61 0 11.88 2.24 15.82 6.69 3.94 4.46 5.92 10.53 5.92 18.2zm-8.22 0c0-6.07-1.2-10.59-3.58-13.54-2.39-2.96-5.7-4.43-9.94-4.43-4.3 0-7.65 1.47-10.01 4.43-2.38 2.96-3.56 7.47-3.56 13.54 0 5.89 1.2 10.34 3.58 13.39 2.39 3.04 5.73 4.56 10 4.56 4.21 0 7.51-1.5 9.91-4.51 2.41-3.01 3.61-7.49 3.61-13.43zM515.1 714.03c0 4.3-1.77 7.83-5.34 10.59-3.56 2.75-8.42 4.14-14.6 4.14-3.49 0-6.69-.42-9.61-1.24-2.91-.84-5.35-1.75-7.33-2.74v-8.92h.42c2.5 1.9 5.28 3.42 8.34 4.54 3.06 1.13 5.98 1.69 8.78 1.69 3.48 0 6.2-.56 8.16-1.7 1.96-1.13 2.94-2.91 2.94-5.35 0-1.86-.53-3.26-1.6-4.21-1.07-.97-3.12-1.78-6.14-2.45-1.13-.26-2.6-.55-4.4-.9-1.82-.33-3.46-.69-4.96-1.1-4.13-1.1-7.05-2.7-8.77-4.83-1.73-2.12-2.6-4.73-2.6-7.82 0-1.95.4-3.78 1.21-5.5.79-1.71 2.02-3.25 3.66-4.6 1.57-1.31 3.58-2.36 6.03-3.14 2.44-.76 5.16-1.15 8.18-1.15 2.83 0 5.68.34 8.58 1.04 2.89.68 5.29 1.52 7.21 2.51v8.48h-.42c-2.03-1.5-4.49-2.77-7.39-3.81-2.9-1.04-5.74-1.56-8.52-1.56-2.89 0-5.34.56-7.33 1.67-2 1.13-3 2.78-3 5.01 0 1.93.61 3.4 1.82 4.39 1.17.98 3.09 1.79 5.73 2.41 1.46.33 3.09.67 4.9 1.01 1.8.33 3.32.65 4.53.92 3.68.85 6.51 2.29 8.51 4.34 1.99 2.09 2.98 4.85 2.98 8.28zM566.68 704.15c0 7.69-1.98 13.75-5.92 18.2-3.94 4.44-9.22 6.66-15.82 6.66-6.68 0-11.97-2.22-15.91-6.66-3.92-4.46-5.89-10.51-5.89-18.2 0-7.67 1.96-13.75 5.89-18.2 3.94-4.46 9.23-6.69 15.91-6.69 6.61 0 11.88 2.24 15.82 6.69 3.94 4.46 5.92 10.53 5.92 18.2zm-8.22 0c0-6.07-1.2-10.59-3.58-13.54-2.39-2.96-5.7-4.43-9.94-4.43-4.3 0-7.65 1.47-10.01 4.43-2.38 2.96-3.56 7.47-3.56 13.54 0 5.89 1.2 10.34 3.58 13.39 2.39 3.04 5.73 4.56 10 4.56 4.21 0 7.51-1.5 9.91-4.51 2.41-3.01 3.61-7.49 3.61-13.43zM586.94 727.72h-7.97v-65.78h7.97zM641.92 727.72h-7.96v-5.25c-2.68 2.12-5.25 3.74-7.7 4.86-2.47 1.13-5.16 1.69-8.13 1.69-4.96 0-8.84-1.52-11.6-4.54-2.77-3.01-4.15-7.46-4.15-13.31v-30.61h7.96v26.87c0 2.39.12 4.44.33 6.14.23 1.7.71 3.16 1.44 4.37.77 1.24 1.76 2.13 2.97 2.7 1.21.56 2.97.85 5.29.85 2.06 0 4.31-.53 6.75-1.6 2.44-1.07 4.72-2.44 6.84-4.1v-35.24h7.96v47.17zM692.45 724.76c-.92.42-1.93.84-3.03 1.28-1.08.44-2.04.78-2.84 1.02.07.53.16 1.21.23 2.01.07.81.1 1.6.1 2.38 0 4.56-1.28 8.05-3.86 10.47-2.57 2.41-5.92 3.62-10.03 3.62-1.04 0-2.36-.1-4.01-.3-1.63-.2-3.07-.46-4.34-.81v-6.85h.37c.74.29 1.72.62 2.96.99 1.24.38 2.57.56 3.98.56 2.93 0 5.08-.55 6.46-1.63 1.37-1.1 2.06-2.87 2.06-5.32 0-.62-.02-1.24-.06-1.89-.04-.63-.1-1.24-.16-1.8-.45.06-.88.12-1.28.17-.4.06-.97.09-1.67.09-3.4 0-6.53-.51-9.38-1.5-2.84-.99-5.28-2.51-7.3-4.54-2.06-2.02-3.65-4.59-4.77-7.69-1.13-3.09-1.69-6.71-1.69-10.85 0-7.72 2.12-13.77 6.36-18.16 4.23-4.4 9.82-6.59 16.78-6.59 2.7 0 5.35.37 7.96 1.14 2.6.75 4.99 1.69 7.16 2.78v8.8h-.42c-2.42-1.86-4.92-3.29-7.5-4.3-2.58-.99-5.09-1.5-7.54-1.5-4.5 0-8.06 1.52-10.66 4.53-2.61 3.01-3.91 7.46-3.91 13.3 0 5.67 1.27 10.04 3.82 13.08 2.55 3.05 6.13 4.57 10.74 4.57 1.62 0 3.25-.2 4.9-.62 1.66-.42 3.16-.97 4.47-1.63 1.16-.59 2.25-1.21 3.26-1.86 1.01-.65 1.82-1.21 2.41-1.69h.42v8.73zM742.82 704.15c0 7.69-1.98 13.75-5.92 18.2-3.94 4.44-9.22 6.66-15.82 6.66-6.68 0-11.97-2.22-15.91-6.66-3.92-4.46-5.89-10.51-5.89-18.2 0-7.67 1.96-13.75 5.89-18.2 3.94-4.46 9.23-6.69 15.91-6.69 6.61 0 11.88 2.24 15.82 6.69 3.94 4.46 5.92 10.53 5.92 18.2zm-8.22 0c0-6.07-1.2-10.59-3.58-13.54-2.39-2.96-5.7-4.43-9.94-4.43-4.3 0-7.65 1.47-10.01 4.43-2.38 2.96-3.56 7.47-3.56 13.54 0 5.89 1.2 10.34 3.58 13.39 2.39 3.04 5.73 4.56 10 4.56 4.21 0 7.51-1.5 9.91-4.51 2.41-3.01 3.61-7.49 3.61-13.43zm4.07-44.8c-.32 4.27-1.4 7.49-3.26 9.65-1.87 2.17-4.37 3.25-7.51 3.25-1.53 0-2.94-.28-4.24-.82-1.3-.55-2.52-1.34-3.69-2.38-1.33-1.21-2.45-2.12-3.36-2.73-.92-.61-1.93-.91-3.03-.91-1.47 0-2.58.63-3.32 1.9-.74 1.27-1.15 2.97-1.27 5.11h-5.45c.23-4.25 1.34-7.47 3.35-9.64 1.99-2.18 4.44-3.26 7.36-3.26 1.4 0 2.77.28 4.08.82 1.3.56 2.55 1.34 3.74 2.36 1.33 1.15 2.5 2.02 3.53 2.61 1.02.58 2.01.87 2.94.87 1.43 0 2.55-.65 3.36-1.95.79-1.28 1.24-2.91 1.33-4.89h5.45zM794.66 704.95h-34.79c0 2.89.43 5.41 1.31 7.56.87 2.15 2.06 3.91 3.59 5.28 1.46 1.34 3.2 2.35 5.21 3.03 2.02.68 4.24 1.01 6.66 1.01 3.2 0 6.43-.63 9.69-1.92 3.25-1.28 5.57-2.55 6.95-3.79h.42v8.67a66.602 66.602 0 01-8.19 2.83c-2.78.76-5.71 1.14-8.78 1.14-7.82 0-13.94-2.12-18.32-6.35-4.4-4.23-6.59-10.24-6.59-18.03 0-7.7 2.11-13.82 6.32-18.33 4.21-4.53 9.75-6.8 16.62-6.8 6.38 0 11.28 1.86 14.73 5.57 3.45 3.72 5.18 8.99 5.18 15.82v4.31zm-7.7-6.06c-.03-4.15-1.08-7.37-3.16-9.65-2.06-2.28-5.22-3.42-9.45-3.42-4.27 0-7.66 1.25-10.19 3.75-2.52 2.51-3.95 5.61-4.3 9.32h27.09zM840.42 714.03c0 4.3-1.77 7.83-5.34 10.59-3.56 2.75-8.42 4.14-14.6 4.14-3.49 0-6.69-.42-9.61-1.24-2.91-.84-5.35-1.75-7.33-2.74v-8.92h.42c2.5 1.9 5.28 3.42 8.34 4.54 3.06 1.13 5.98 1.69 8.78 1.69 3.48 0 6.2-.56 8.16-1.7 1.96-1.13 2.94-2.91 2.94-5.35 0-1.86-.53-3.26-1.6-4.21-1.07-.97-3.12-1.78-6.14-2.45-1.13-.26-2.6-.55-4.4-.9-1.82-.33-3.46-.69-4.96-1.1-4.13-1.1-7.05-2.7-8.77-4.83-1.73-2.12-2.6-4.73-2.6-7.82 0-1.95.4-3.78 1.21-5.5.79-1.71 2.02-3.25 3.66-4.6 1.57-1.31 3.58-2.36 6.03-3.14 2.44-.76 5.16-1.15 8.18-1.15 2.83 0 5.68.34 8.58 1.04 2.89.68 5.29 1.52 7.21 2.51v8.48h-.42c-2.03-1.5-4.49-2.77-7.39-3.81-2.9-1.04-5.74-1.56-8.52-1.56-2.89 0-5.34.56-7.33 1.67-2 1.13-3 2.78-3 5.01 0 1.93.61 3.4 1.82 4.39 1.17.98 3.09 1.79 5.73 2.41 1.46.33 3.09.67 4.9 1.01 1.8.33 3.32.65 4.53.92 3.68.85 6.51 2.29 8.51 4.34 1.99 2.09 2.98 4.85 2.98 8.28z"
      />
    </svg>
  </S.Wrapper>
)

export default Logo
