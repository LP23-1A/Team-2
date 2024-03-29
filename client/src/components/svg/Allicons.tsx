import { stat } from "fs";

function LoginAvatar() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 2C8.49445 2 8.9778 2.14662 9.38893 2.42133C9.80005 2.69603 10.1205 3.08648 10.3097 3.54329C10.4989 4.00011 10.5484 4.50277 10.452 4.98773C10.3555 5.47268 10.1174 5.91814 9.76777 6.26777C9.41814 6.6174 8.97268 6.8555 8.48773 6.95196C8.00278 7.04843 7.50011 6.99892 7.04329 6.8097C6.58648 6.62048 6.19603 6.30005 5.92133 5.88893C5.64662 5.4778 5.5 4.99445 5.5 4.5C5.5 3.83696 5.76339 3.20107 6.23223 2.73223C6.70108 2.26339 7.33696 2 8 2ZM8 1C7.30777 1 6.63108 1.20527 6.05551 1.58986C5.47993 1.97444 5.03133 2.52107 4.76642 3.16061C4.50152 3.80015 4.4322 4.50388 4.56725 5.18282C4.7023 5.86175 5.03564 6.48539 5.52513 6.97487C6.01461 7.46436 6.63825 7.7977 7.31719 7.93275C7.99612 8.0678 8.69985 7.99848 9.33939 7.73358C9.97893 7.46867 10.5256 7.02007 10.9101 6.4445C11.2947 5.86892 11.5 5.19223 11.5 4.5C11.5 3.57174 11.1313 2.6815 10.4749 2.02513C9.8185 1.36875 8.92826 1 8 1Z"
        fill="white"
      />
      <path
        d="M13 15H12V12.5C12 12.1717 11.9353 11.8466 11.8097 11.5433C11.6841 11.24 11.4999 10.9644 11.2678 10.7322C11.0356 10.5001 10.76 10.3159 10.4567 10.1903C10.1534 10.0647 9.8283 10 9.5 10H6.5C5.83696 10 5.20107 10.2634 4.73223 10.7322C4.26339 11.2011 4 11.837 4 12.5V15H3V12.5C3 11.5717 3.36875 10.6815 4.02513 10.0251C4.6815 9.36875 5.57174 9 6.5 9H9.5C10.4283 9 11.3185 9.36875 11.9749 10.0251C12.6313 10.6815 13 11.5717 13 12.5V15Z"
        fill="white"
      />
    </svg>
  );
}

function Email() {
  return (
    <svg
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6673 0.666992H2.33398C1.80355 0.666992 1.29484 0.877706 0.919771 1.25278C0.544698 1.62785 0.333984 2.13656 0.333984 2.66699V9.33366C0.333984 9.86409 0.544698 10.3728 0.919771 10.7479C1.29484 11.1229 1.80355 11.3337 2.33398 11.3337H11.6673C12.1978 11.3337 12.7065 11.1229 13.0815 10.7479C13.4566 10.3728 13.6673 9.86409 13.6673 9.33366V2.66699C13.6673 2.13656 13.4566 1.62785 13.0815 1.25278C12.7065 0.877706 12.1978 0.666992 11.6673 0.666992ZM2.33398 2.00033H11.6673C11.8441 2.00033 12.0137 2.07056 12.1387 2.19559C12.2637 2.32061 12.334 2.49018 12.334 2.66699L7.00065 5.92033L1.66732 2.66699C1.66732 2.49018 1.73756 2.32061 1.86258 2.19559C1.9876 2.07056 2.15717 2.00033 2.33398 2.00033ZM12.334 9.33366C12.334 9.51047 12.2637 9.68004 12.1387 9.80506C12.0137 9.93009 11.8441 10.0003 11.6673 10.0003H2.33398C2.15717 10.0003 1.9876 9.93009 1.86258 9.80506C1.73756 9.68004 1.66732 9.51047 1.66732 9.33366V4.18699L6.65398 7.23366C6.75533 7.29217 6.87029 7.32297 6.98732 7.32297C7.10434 7.32297 7.21931 7.29217 7.32065 7.23366L12.334 4.18699V9.33366Z"
        fill="white"
      />
    </svg>
  );
}

function Phone() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0448 14.6657H11.0635C11.4155 14.6657 11.7481 14.527 12.0001 14.275L13.8081 12.467C13.8701 12.4051 13.9193 12.3317 13.9528 12.2508C13.9863 12.1699 14.0036 12.0832 14.0036 11.9957C14.0036 11.9081 13.9863 11.8214 13.9528 11.7405C13.9193 11.6597 13.8701 11.5862 13.8081 11.5243L11.1415 8.85767C11.0796 8.79571 11.0061 8.74655 10.9253 8.71301C10.8444 8.67947 10.7577 8.66221 10.6701 8.66221C10.5826 8.66221 10.4959 8.67947 10.415 8.71301C10.3341 8.74655 10.2607 8.79571 10.1988 8.85767L9.13613 9.92034C8.64346 9.77367 7.72413 9.44034 7.14146 8.85767C6.5588 8.27501 6.22546 7.35567 6.0788 6.86301L7.14146 5.80034C7.20343 5.73848 7.25258 5.66501 7.28612 5.58414C7.31967 5.50326 7.33693 5.41656 7.33693 5.32901C7.33693 5.24145 7.31967 5.15476 7.28612 5.07388C7.25258 4.993 7.20343 4.91953 7.14146 4.85767L4.4748 2.19101C4.34734 2.07071 4.17872 2.0037 4.00346 2.0037C3.8282 2.0037 3.65958 2.07071 3.53213 2.19101L1.7248 3.99901C1.47146 4.25234 1.3288 4.60034 1.33413 4.95567C1.34946 5.90501 1.6008 9.20234 4.19946 11.801C6.79813 14.3997 10.0955 14.6503 11.0448 14.6657ZM4.00413 3.60501L5.72813 5.32901L4.86613 6.19101C4.78768 6.26924 4.73006 6.36585 4.6985 6.47204C4.66695 6.57824 4.66247 6.69064 4.68546 6.79901C4.70146 6.87567 5.0928 8.69368 6.19946 9.80034C7.30613 10.907 9.12413 11.2983 9.2008 11.3143C9.30916 11.3375 9.4216 11.333 9.52781 11.3015C9.63403 11.2699 9.73064 11.2122 9.8088 11.1337L10.6708 10.2717L12.3948 11.9957L11.0575 13.3323C10.2255 13.3183 7.3788 13.095 5.14213 10.8577C2.89813 8.61368 2.6808 5.75701 2.66746 4.94167L4.00413 3.60501ZM13.3335 7.33234H14.6668C14.6668 3.91234 12.0848 1.33301 8.66013 1.33301V2.66634C11.3681 2.66634 13.3335 4.62834 13.3335 7.33234Z"
        fill="white"
      />
      <path
        d="M8.66602 5.33333C10.068 5.33333 10.666 5.93133 10.666 7.33333H11.9993C11.9993 5.18333 10.816 4 8.66602 4V5.33333Z"
        fill="white"
      />
    </svg>
  );
}
function Heart() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.4408 2.07353C11.733 1.36554 10.7946 0.935086 9.79632 0.860455C8.79799 0.785825 7.80603 1.07198 7.00083 1.66687C6.15261 1.03596 5.09683 0.749876 4.04611 0.866226C2.9954 0.982577 2.02779 1.49272 1.33815 2.29392C0.648506 3.09513 0.28805 4.12788 0.329369 5.18421C0.370688 6.24054 0.810713 7.24198 1.56083 7.98687L6.5275 12.9535C6.58948 13.016 6.66321 13.0656 6.74445 13.0995C6.82569 13.1333 6.91283 13.1507 7.00083 13.1507C7.08884 13.1507 7.17598 13.1333 7.25722 13.0995C7.33846 13.0656 7.41219 13.016 7.47417 12.9535L12.4408 7.98687C12.8293 7.59868 13.1374 7.13776 13.3476 6.63045C13.5579 6.12313 13.6661 5.57936 13.6661 5.0302C13.6661 4.48105 13.5579 3.93728 13.3476 3.42996C13.1374 2.92264 12.8293 2.46172 12.4408 2.07353ZM11.5008 7.04687L7.00083 11.5402L2.50083 7.04687C2.10428 6.64867 1.83415 6.14223 1.72432 5.59109C1.61449 5.03996 1.66986 4.46866 1.88347 3.94886C2.09708 3.42907 2.45943 2.98393 2.92507 2.66928C3.3907 2.35464 3.93888 2.18449 4.50083 2.1802C5.25158 2.18204 5.9709 2.48176 6.50083 3.01353C6.56281 3.07602 6.63654 3.12562 6.71778 3.15946C6.79902 3.19331 6.88616 3.21073 6.97417 3.21073C7.06218 3.21073 7.14931 3.19331 7.23055 3.15946C7.31179 3.12562 7.38553 3.07602 7.4475 3.01353C7.99305 2.54079 8.69783 2.29296 9.4192 2.32022C10.1406 2.34747 10.8246 2.64777 11.333 3.16033C11.8413 3.67289 12.1359 4.35943 12.1572 5.08099C12.1784 5.80256 11.9248 6.50526 11.4475 7.04687H11.5008Z"
        fill="white"
      />
    </svg>
  );
}

function Search() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.2094 19.2894L16.4994 15.6094C17.9395 13.8138 18.6369 11.5347 18.4482 9.24072C18.2595 6.94672 17.1991 4.8122 15.4849 3.27606C13.7708 1.73992 11.5332 0.918926 9.23234 0.981887C6.93145 1.04485 4.74214 1.98698 3.11456 3.61456C1.48698 5.24214 0.544847 7.43145 0.481887 9.73234C0.418926 12.0332 1.23992 14.2708 2.77606 15.9849C4.3122 17.6991 6.44672 18.7595 8.74072 18.9482C11.0347 19.1369 13.3138 18.4395 15.1094 16.9994L18.7894 20.6794C18.8824 20.7731 18.993 20.8475 19.1148 20.8983C19.2367 20.9491 19.3674 20.9752 19.4994 20.9752C19.6314 20.9752 19.7621 20.9491 19.884 20.8983C20.0059 20.8475 20.1165 20.7731 20.2094 20.6794C20.3897 20.493 20.4904 20.2438 20.4904 19.9844C20.4904 19.7251 20.3897 19.4759 20.2094 19.2894ZM9.49942 16.9994C8.11495 16.9994 6.76157 16.5889 5.61042 15.8197C4.45928 15.0505 3.56207 13.9573 3.03226 12.6782C2.50245 11.3991 2.36382 9.99165 2.63392 8.63378C2.90402 7.27592 3.5707 6.02864 4.54967 5.04967C5.52864 4.0707 6.77592 3.40402 8.13378 3.13392C9.49165 2.86382 10.8991 3.00245 12.1782 3.53226C13.4573 4.06207 14.5505 4.95928 15.3197 6.11042C16.0889 7.26157 16.4994 8.61495 16.4994 9.99942C16.4994 11.8559 15.7619 13.6364 14.4492 14.9492C13.1364 16.2619 11.3559 16.9994 9.49942 16.9994Z"
        fill="url(#paint0_linear_1484_770)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1484_770"
          x1="0.478516"
          y1="0.978516"
          x2="23.9283"
          y2="15.3755"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3F9FF" />
          <stop offset="1" stopColor="#F1F0FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Facebook() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.82014 10.9791V6.7352H9.25186L9.46467 5.07358H7.82014V4.0152C7.82014 3.53571 7.95373 3.20743 8.64189 3.20743H9.51386V1.726C9.0896 1.68054 8.66314 1.65858 8.23645 1.66024C6.97095 1.66024 6.10208 2.4328 6.10208 3.85105V5.07047H4.67969V6.73209H6.10519V10.9791H7.82014Z"
        fill="white"
      />
    </svg>
  );
}

function Instagram() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.2457 4.40715C11.2404 4.01499 11.167 3.62671 11.0287 3.25971C10.9088 2.95015 10.7256 2.669 10.4908 2.43425C10.2561 2.1995 9.97491 2.01629 9.66535 1.89635C9.30306 1.76035 8.92033 1.68681 8.53344 1.67887C8.03531 1.6566 7.87739 1.65039 6.61292 1.65039C5.34845 1.65039 5.18638 1.65039 4.69188 1.67887C4.30517 1.68687 3.92261 1.76041 3.56049 1.89635C3.25088 2.01621 2.96969 2.19938 2.73493 2.43415C2.50017 2.66891 2.31699 2.9501 2.19713 3.25971C2.06086 3.62172 1.98748 4.00436 1.98017 4.3911C1.9579 4.88974 1.95117 5.04767 1.95117 6.31214C1.95117 7.5766 1.95117 7.73816 1.98017 8.23317C1.98794 8.62049 2.06095 9.00262 2.19713 9.3656C2.31719 9.67512 2.5005 9.95619 2.73535 10.1909C2.97019 10.4255 3.2514 10.6086 3.56101 10.7284C3.92214 10.8699 4.30476 10.9487 4.6924 10.9615C5.19104 10.9837 5.34897 10.9905 6.61344 10.9905C7.8779 10.9905 8.03997 10.9905 8.53447 10.9615C8.92135 10.9538 9.30411 10.8805 9.66638 10.7445C9.97587 10.6244 10.2569 10.4412 10.4917 10.2064C10.7264 9.97169 10.9097 9.69062 11.0297 9.38113C11.1659 9.01867 11.2389 8.63654 11.2467 8.24871C11.269 7.75058 11.2757 7.59266 11.2757 6.32767C11.2747 5.06321 11.2747 4.90269 11.2457 4.40715ZM6.60981 8.70333C5.28735 8.70333 4.21603 7.63201 4.21603 6.30955C4.21603 4.98709 5.28735 3.91576 6.60981 3.91576C7.24468 3.91576 7.85355 4.16796 8.30247 4.61689C8.7514 5.06581 9.0036 5.67468 9.0036 6.30955C9.0036 6.94442 8.7514 7.55329 8.30247 8.00221C7.85355 8.45113 7.24468 8.70333 6.60981 8.70333ZM9.09887 4.38541C8.78975 4.38541 8.54069 4.13583 8.54069 3.82722C8.54069 3.75395 8.55512 3.6814 8.58316 3.61371C8.61119 3.54602 8.65229 3.48451 8.7041 3.4327C8.75591 3.3809 8.81741 3.3398 8.88511 3.31176C8.9528 3.28372 9.02535 3.26929 9.09862 3.26929C9.17188 3.26929 9.24443 3.28372 9.31212 3.31176C9.37982 3.3398 9.44132 3.3809 9.49313 3.4327C9.54494 3.48451 9.58604 3.54602 9.61407 3.61371C9.64211 3.6814 9.65654 3.75395 9.65654 3.82722C9.65654 4.13583 9.40696 4.38541 9.09887 4.38541Z"
        fill="white"
      />
      <path
        d="M6.60964 7.86576C7.46842 7.86576 8.16459 7.16959 8.16459 6.31081C8.16459 5.45204 7.46842 4.75586 6.60964 4.75586C5.75086 4.75586 5.05469 5.45204 5.05469 6.31081C5.05469 7.16959 5.75086 7.86576 6.60964 7.86576Z"
        fill="white"
      />
    </svg>
  );
}

function Twitter() {
  return (
    <svg
      width="12"
      height="11"
      viewBox="0 0 12 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.931 1.66303C11.4986 1.85461 11.0342 1.98406 10.5459 2.04257C11.0497 1.74111 11.4266 1.26664 11.6063 0.707688C11.133 0.988848 10.6149 1.18675 10.0747 1.2928C9.71137 0.9049 9.23017 0.647792 8.70578 0.561396C8.18138 0.475001 7.64313 0.56415 7.1746 0.815004C6.70606 1.06586 6.33345 1.46438 6.11462 1.9487C5.89579 2.43302 5.84297 2.97604 5.96438 3.49345C5.00525 3.44529 4.06697 3.196 3.21042 2.76175C2.35388 2.3275 1.59821 1.718 0.992469 0.972802C0.785349 1.33008 0.666255 1.74432 0.666255 2.18549C0.666024 2.58264 0.763826 2.9737 0.950982 3.32399C1.13814 3.67428 1.40886 3.97295 1.73914 4.19351C1.35611 4.18133 0.981529 4.07783 0.646579 3.89164V3.9227C0.64654 4.47972 0.839217 5.0196 1.19192 5.45073C1.54462 5.88186 2.03561 6.17768 2.58159 6.28801C2.22627 6.38417 1.85374 6.39834 1.49215 6.32944C1.64619 6.80872 1.94625 7.22783 2.35033 7.5281C2.7544 7.82837 3.24226 7.99477 3.74561 8.004C2.89115 8.67476 1.83591 9.03861 0.749621 9.03701C0.557197 9.03706 0.364936 9.02582 0.173828 9.00335C1.27647 9.71231 2.56002 10.0886 3.87092 10.0871C8.30846 10.0871 10.7343 6.41177 10.7343 3.22419C10.7343 3.12063 10.7318 3.01604 10.7271 2.91248C11.199 2.57123 11.6063 2.14867 11.9299 1.66458L11.931 1.66303Z"
        fill="white"
      />
    </svg>
  );
}
function DownArrow() {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 4.5L6.5 8.5L10.5 4.5"
        stroke="#FB2E86"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RightArrow() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99997 6.00003L8.58997 7.41003L13.17 12L8.58997 16.59L9.99997 18L16 12L9.99997 6.00003Z"
        fill="#121316"
      />
    </svg>
  );
}

function ZoomIn() {
  return (
    <div className="absolute z-10 top-4 left-[82px] cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
      >
        <path
          d="M9.37634 6.25037H7.50134V4.37537C7.50134 4.20961 7.4355 4.05064 7.31829 3.93343C7.20108 3.81622 7.0421 3.75037 6.87634 3.75037C6.71058 3.75037 6.55161 3.81622 6.4344 3.93343C6.31719 4.05064 6.25134 4.20961 6.25134 4.37537V6.25037H4.37634C4.21058 6.25037 4.05161 6.31622 3.9344 6.43343C3.81719 6.55064 3.75134 6.70961 3.75134 6.87537C3.75134 7.04113 3.81719 7.2001 3.9344 7.31731C4.05161 7.43452 4.21058 7.50037 4.37634 7.50037H6.25134V9.37537C6.25134 9.54113 6.31719 9.7001 6.4344 9.81731C6.55161 9.93452 6.71058 10.0004 6.87634 10.0004C7.0421 10.0004 7.20108 9.93452 7.31829 9.81731C7.4355 9.7001 7.50134 9.54113 7.50134 9.37537V7.50037H9.37634C9.5421 7.50037 9.70108 7.43452 9.81829 7.31731C9.9355 7.2001 10.0013 7.04113 10.0013 6.87537C10.0013 6.70961 9.9355 6.55064 9.81829 6.43343C9.70108 6.31622 9.5421 6.25037 9.37634 6.25037ZM13.5701 12.6816L11.2513 10.3816C12.1514 9.25937 12.5873 7.83493 12.4694 6.40118C12.3514 4.96743 11.6886 3.63336 10.6173 2.67327C9.54595 1.71318 8.14747 1.20006 6.70942 1.23941C5.27137 1.27876 3.90305 1.86759 2.88581 2.88483C1.86857 3.90207 1.27974 5.27039 1.24039 6.70844C1.20104 8.1465 1.71416 9.54497 2.67425 10.6163C3.63433 11.6877 4.96841 12.3504 6.40216 12.4684C7.83591 12.5863 9.26035 12.1504 10.3826 11.2504L12.6826 13.5504C12.7407 13.6089 12.8098 13.6554 12.886 13.6872C12.9621 13.7189 13.0438 13.7352 13.1263 13.7352C13.2089 13.7352 13.2905 13.7189 13.3667 13.6872C13.4429 13.6554 13.512 13.6089 13.5701 13.5504C13.6827 13.4338 13.7457 13.2781 13.7457 13.116C13.7457 12.9539 13.6827 12.7982 13.5701 12.6816ZM6.87634 11.2504C6.01105 11.2504 5.16519 10.9938 4.44572 10.513C3.72626 10.0323 3.1655 9.34903 2.83437 8.54961C2.50324 7.75018 2.4166 6.87051 2.58541 6.02185C2.75422 5.17318 3.1709 4.39363 3.78275 3.78178C4.39461 3.16992 5.17416 2.75324 6.02282 2.58443C6.87149 2.41562 7.75116 2.50226 8.55058 2.83339C9.35001 3.16453 10.0333 3.72528 10.514 4.44475C10.9948 5.16421 11.2513 6.01007 11.2513 6.87537C11.2513 8.03569 10.7904 9.14849 9.96994 9.96896C9.14946 10.7894 8.03667 11.2504 6.87634 11.2504Z"
          fill="url(#paint0_linear_1550_9168)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1550_9168"
            x1="1.23828"
            y1="1.2373"
            x2="13.7362"
            y2="13.7447"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1389FF" />
            <stop offset="1" stopColor="#1DB4E7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
function ZoomInNew() {
  return (
    <div className="absolute z-10 bottom-14 left-4 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
      >
        <path
          d="M9.37634 6.25037H7.50134V4.37537C7.50134 4.20961 7.4355 4.05064 7.31829 3.93343C7.20108 3.81622 7.0421 3.75037 6.87634 3.75037C6.71058 3.75037 6.55161 3.81622 6.4344 3.93343C6.31719 4.05064 6.25134 4.20961 6.25134 4.37537V6.25037H4.37634C4.21058 6.25037 4.05161 6.31622 3.9344 6.43343C3.81719 6.55064 3.75134 6.70961 3.75134 6.87537C3.75134 7.04113 3.81719 7.2001 3.9344 7.31731C4.05161 7.43452 4.21058 7.50037 4.37634 7.50037H6.25134V9.37537C6.25134 9.54113 6.31719 9.7001 6.4344 9.81731C6.55161 9.93452 6.71058 10.0004 6.87634 10.0004C7.0421 10.0004 7.20108 9.93452 7.31829 9.81731C7.4355 9.7001 7.50134 9.54113 7.50134 9.37537V7.50037H9.37634C9.5421 7.50037 9.70108 7.43452 9.81829 7.31731C9.9355 7.2001 10.0013 7.04113 10.0013 6.87537C10.0013 6.70961 9.9355 6.55064 9.81829 6.43343C9.70108 6.31622 9.5421 6.25037 9.37634 6.25037ZM13.5701 12.6816L11.2513 10.3816C12.1514 9.25937 12.5873 7.83493 12.4694 6.40118C12.3514 4.96743 11.6886 3.63336 10.6173 2.67327C9.54595 1.71318 8.14747 1.20006 6.70942 1.23941C5.27137 1.27876 3.90305 1.86759 2.88581 2.88483C1.86857 3.90207 1.27974 5.27039 1.24039 6.70844C1.20104 8.1465 1.71416 9.54497 2.67425 10.6163C3.63433 11.6877 4.96841 12.3504 6.40216 12.4684C7.83591 12.5863 9.26035 12.1504 10.3826 11.2504L12.6826 13.5504C12.7407 13.6089 12.8098 13.6554 12.886 13.6872C12.9621 13.7189 13.0438 13.7352 13.1263 13.7352C13.2089 13.7352 13.2905 13.7189 13.3667 13.6872C13.4429 13.6554 13.512 13.6089 13.5701 13.5504C13.6827 13.4338 13.7457 13.2781 13.7457 13.116C13.7457 12.9539 13.6827 12.7982 13.5701 12.6816ZM6.87634 11.2504C6.01105 11.2504 5.16519 10.9938 4.44572 10.513C3.72626 10.0323 3.1655 9.34903 2.83437 8.54961C2.50324 7.75018 2.4166 6.87051 2.58541 6.02185C2.75422 5.17318 3.1709 4.39363 3.78275 3.78178C4.39461 3.16992 5.17416 2.75324 6.02282 2.58443C6.87149 2.41562 7.75116 2.50226 8.55058 2.83339C9.35001 3.16453 10.0333 3.72528 10.514 4.44475C10.9948 5.16421 11.2513 6.01007 11.2513 6.87537C11.2513 8.03569 10.7904 9.14849 9.96994 9.96896C9.14946 10.7894 8.03667 11.2504 6.87634 11.2504Z"
          fill="url(#paint0_linear_1550_9168)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1550_9168"
            x1="1.23828"
            y1="1.2373"
            x2="13.7362"
            y2="13.7447"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1389FF" />
            <stop offset="1" stopColor="#1DB4E7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
function HeartBlue() {
  return (
    <div className="absolute z-10 top-4 left-14 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
      >
        <path
          d="M14.2781 3.26581C13.526 2.51357 12.529 2.05621 11.4683 1.97692C10.4076 1.89762 9.3536 2.20166 8.49808 2.83373C7.59684 2.16339 6.47507 1.85943 5.35869 1.98305C4.24231 2.10667 3.21422 2.6487 2.48148 3.49998C1.74873 4.35126 1.36575 5.44856 1.40965 6.57091C1.45355 7.69326 1.92108 8.75729 2.71808 9.54873L7.99516 14.8258C8.06101 14.8922 8.13935 14.9449 8.22567 14.9809C8.31199 15.0168 8.40457 15.0353 8.49808 15.0353C8.59159 15.0353 8.68417 15.0168 8.77049 14.9809C8.85681 14.9449 8.93515 14.8922 9.001 14.8258L14.2781 9.54873C14.6908 9.13628 15.0182 8.64656 15.2416 8.10753C15.4649 7.56851 15.5799 6.99075 15.5799 6.40727C15.5799 5.8238 15.4649 5.24604 15.2416 4.70701C15.0182 4.16799 14.6908 3.67826 14.2781 3.26581ZM13.2793 8.54998L8.49808 13.3241L3.71683 8.54998C3.29549 8.12689 3.00848 7.58881 2.89178 7.00322C2.77509 6.41764 2.83391 5.81063 3.06088 5.25835C3.28784 4.70607 3.67284 4.23311 4.16757 3.8988C4.66231 3.56448 5.24475 3.38371 5.84183 3.37915C6.63949 3.3811 7.40377 3.69955 7.96683 4.26456C8.03268 4.33095 8.11102 4.38365 8.19734 4.41961C8.28365 4.45557 8.37624 4.47409 8.46975 4.47409C8.56325 4.47409 8.65584 4.45557 8.74216 4.41961C8.82847 4.38365 8.90681 4.33095 8.97266 4.26456C9.55231 3.76227 10.3011 3.49896 11.0676 3.52791C11.834 3.55687 12.5609 3.87594 13.101 4.42053C13.6411 4.96513 13.9541 5.69457 13.9767 6.46124C13.9993 7.22791 13.7297 7.97452 13.2227 8.54998H13.2793Z"
          fill="url(#paint0_linear_1550_9167)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1550_9167"
            x1="1.40625"
            y1="1.95605"
            x2="14.4434"
            y2="16.0841"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1389FF" />
            <stop offset="1" stopColor="#1DB4E7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function HeartBlueNew() {
  return (
    <div className="absolute z-10 bottom-6 left-4  cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
      >
        <path
          d="M14.2781 3.26581C13.526 2.51357 12.529 2.05621 11.4683 1.97692C10.4076 1.89762 9.3536 2.20166 8.49808 2.83373C7.59684 2.16339 6.47507 1.85943 5.35869 1.98305C4.24231 2.10667 3.21422 2.6487 2.48148 3.49998C1.74873 4.35126 1.36575 5.44856 1.40965 6.57091C1.45355 7.69326 1.92108 8.75729 2.71808 9.54873L7.99516 14.8258C8.06101 14.8922 8.13935 14.9449 8.22567 14.9809C8.31199 15.0168 8.40457 15.0353 8.49808 15.0353C8.59159 15.0353 8.68417 15.0168 8.77049 14.9809C8.85681 14.9449 8.93515 14.8922 9.001 14.8258L14.2781 9.54873C14.6908 9.13628 15.0182 8.64656 15.2416 8.10753C15.4649 7.56851 15.5799 6.99075 15.5799 6.40727C15.5799 5.8238 15.4649 5.24604 15.2416 4.70701C15.0182 4.16799 14.6908 3.67826 14.2781 3.26581ZM13.2793 8.54998L8.49808 13.3241L3.71683 8.54998C3.29549 8.12689 3.00848 7.58881 2.89178 7.00322C2.77509 6.41764 2.83391 5.81063 3.06088 5.25835C3.28784 4.70607 3.67284 4.23311 4.16757 3.8988C4.66231 3.56448 5.24475 3.38371 5.84183 3.37915C6.63949 3.3811 7.40377 3.69955 7.96683 4.26456C8.03268 4.33095 8.11102 4.38365 8.19734 4.41961C8.28365 4.45557 8.37624 4.47409 8.46975 4.47409C8.56325 4.47409 8.65584 4.45557 8.74216 4.41961C8.82847 4.38365 8.90681 4.33095 8.97266 4.26456C9.55231 3.76227 10.3011 3.49896 11.0676 3.52791C11.834 3.55687 12.5609 3.87594 13.101 4.42053C13.6411 4.96513 13.9541 5.69457 13.9767 6.46124C13.9993 7.22791 13.7297 7.97452 13.2227 8.54998H13.2793Z"
          fill="url(#paint0_linear_1550_9167)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1550_9167"
            x1="1.40625"
            y1="1.95605"
            x2="14.4434"
            y2="16.0841"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1389FF" />
            <stop offset="1" stopColor="#1DB4E7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function CartNavbar() {
  return (
    <div className="cursor cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          d="M0.5 1.25C0.5 1.05109 0.579018 0.860322 0.71967 0.71967C0.860322 0.579018 1.05109 0.5 1.25 0.5H1.808C2.758 0.5 3.328 1.139 3.653 1.733C3.87 2.129 4.027 2.588 4.15 3.004C4.18327 3.00137 4.21663 3.00004 4.25 3H16.748C17.578 3 18.178 3.794 17.95 4.593L16.122 11.002C15.9581 11.5769 15.6114 12.0827 15.1343 12.4428C14.6572 12.803 14.0758 12.9979 13.478 12.998H7.53C6.92749 12.998 6.34165 12.8002 5.86252 12.4349C5.3834 12.0696 5.0375 11.557 4.878 10.976L4.118 8.204L2.858 3.956L2.857 3.948C2.701 3.381 2.555 2.85 2.337 2.454C2.128 2.069 1.96 2 1.809 2H1.25C1.05109 2 0.860322 1.92098 0.71967 1.78033C0.579018 1.63968 0.5 1.44891 0.5 1.25ZM5.573 7.84L6.324 10.579C6.474 11.121 6.967 11.498 7.53 11.498H13.478C13.7497 11.498 14.014 11.4095 14.2309 11.2458C14.4478 11.0821 14.6054 10.8523 14.68 10.591L16.417 4.5H4.585L5.559 7.787L5.573 7.84Z"
          fill="white"
        />
        <path
          d="M9 16C9 16.5304 8.78929 17.0391 8.41421 17.4142C8.03914 17.7893 7.53043 18 7 18C6.46957 18 5.96086 17.7893 5.58579 17.4142C5.21071 17.0391 5 16.5304 5 16C5 15.4696 5.21071 14.9609 5.58579 14.5858C5.96086 14.2107 6.46957 14 7 14C7.53043 14 8.03914 14.2107 8.41421 14.5858C8.78929 14.9609 9 15.4696 9 16ZM7.5 16C7.5 15.8674 7.44732 15.7402 7.35355 15.6464C7.25979 15.5527 7.13261 15.5 7 15.5C6.86739 15.5 6.74021 15.5527 6.64645 15.6464C6.55268 15.7402 6.5 15.8674 6.5 16C6.5 16.1326 6.55268 16.2598 6.64645 16.3536C6.74021 16.4473 6.86739 16.5 7 16.5C7.13261 16.5 7.25979 16.4473 7.35355 16.3536C7.44732 16.2598 7.5 16.1326 7.5 16Z"
          fill="white"
        />
        <path
          d="M16 16C16 16.5304 15.7893 17.0391 15.4142 17.4142C15.0391 17.7893 14.5304 18 14 18C13.4696 18 12.9609 17.7893 12.5858 17.4142C12.2107 17.0391 12 16.5304 12 16C12 15.4696 12.2107 14.9609 12.5858 14.5858C12.9609 14.2107 13.4696 14 14 14C14.5304 14 15.0391 14.2107 15.4142 14.5858C15.7893 14.9609 16 15.4696 16 16ZM14.5 16C14.5 15.8674 14.4473 15.7402 14.3536 15.6464C14.2598 15.5527 14.1326 15.5 14 15.5C13.8674 15.5 13.7402 15.5527 13.6464 15.6464C13.5527 15.7402 13.5 15.8674 13.5 16C13.5 16.1326 13.5527 16.2598 13.6464 16.3536C13.7402 16.4473 13.8674 16.5 14 16.5C14.1326 16.5 14.2598 16.4473 14.3536 16.3536C14.4473 16.2598 14.5 16.1326 14.5 16Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
function CartNew({ onclick }: any) {
  return (
    <div
      onClick={onclick}
      className=" bg-white p-2 absolute z-20 left-2 bottom-20 rounded-full cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="12"
        viewBox="0 0 13 12"
        fill="none"
      >
        <path
          d="M0.667969 0.833008C0.667969 0.7004 0.720647 0.573223 0.814415 0.479454C0.908183 0.385686 1.03536 0.333008 1.16797 0.333008H1.53997C2.1733 0.333008 2.5533 0.759008 2.76997 1.15501C2.91464 1.41901 3.0193 1.72501 3.1013 2.00234C3.12348 2.00059 3.14572 1.9997 3.16797 1.99967H11.5C12.0533 1.99967 12.4533 2.52901 12.3013 3.06167L11.0826 7.33434C10.9734 7.71758 10.7422 8.05478 10.4242 8.29488C10.1061 8.53499 9.71848 8.66492 9.31997 8.66501H5.35464C4.95296 8.66502 4.5624 8.53313 4.24299 8.28959C3.92357 8.04605 3.69297 7.70435 3.58664 7.31701L3.07997 5.46901L2.23997 2.63701L2.2393 2.63167C2.1353 2.25367 2.03797 1.89967 1.89264 1.63567C1.7533 1.37901 1.6413 1.33301 1.54064 1.33301H1.16797C1.03536 1.33301 0.908183 1.28033 0.814415 1.18656C0.720647 1.09279 0.667969 0.965616 0.667969 0.833008ZM4.04997 5.22634L4.55064 7.05234C4.65064 7.41368 4.9793 7.66501 5.35464 7.66501H9.31997C9.50111 7.66501 9.67731 7.60598 9.8219 7.49688C9.96649 7.38777 10.0716 7.23453 10.1213 7.06034L11.2793 2.99967H3.3913L4.04064 5.19101L4.04997 5.22634Z"
          fill="#151875"
        />
        <path
          d="M6.33464 10.6663C6.33464 11.02 6.19416 11.3591 5.94411 11.6092C5.69406 11.8592 5.35492 11.9997 5.0013 11.9997C4.64768 11.9997 4.30854 11.8592 4.05849 11.6092C3.80844 11.3591 3.66797 11.02 3.66797 10.6663C3.66797 10.3127 3.80844 9.97358 4.05849 9.72353C4.30854 9.47348 4.64768 9.33301 5.0013 9.33301C5.35492 9.33301 5.69406 9.47348 5.94411 9.72353C6.19416 9.97358 6.33464 10.3127 6.33464 10.6663ZM5.33464 10.6663C5.33464 10.5779 5.29952 10.4932 5.237 10.4306C5.17449 10.3681 5.08971 10.333 5.0013 10.333C4.9129 10.333 4.82811 10.3681 4.7656 10.4306C4.70309 10.4932 4.66797 10.5779 4.66797 10.6663C4.66797 10.7547 4.70309 10.8395 4.7656 10.902C4.82811 10.9646 4.9129 10.9997 5.0013 10.9997C5.08971 10.9997 5.17449 10.9646 5.237 10.902C5.29952 10.8395 5.33464 10.7547 5.33464 10.6663Z"
          fill="#151875"
        />
        <path
          d="M11.0026 10.6663C11.0026 11.02 10.8621 11.3591 10.6121 11.6092C10.362 11.8592 10.0229 11.9997 9.66927 11.9997C9.31565 11.9997 8.97651 11.8592 8.72646 11.6092C8.47641 11.3591 8.33594 11.02 8.33594 10.6663C8.33594 10.3127 8.47641 9.97358 8.72646 9.72353C8.97651 9.47348 9.31565 9.33301 9.66927 9.33301C10.0229 9.33301 10.362 9.47348 10.6121 9.72353C10.8621 9.97358 11.0026 10.3127 11.0026 10.6663ZM10.0026 10.6663C10.0026 10.5779 9.96749 10.4932 9.90497 10.4306C9.84246 10.3681 9.75768 10.333 9.66927 10.333C9.58087 10.333 9.49608 10.3681 9.43357 10.4306C9.37106 10.4932 9.33594 10.5779 9.33594 10.6663C9.33594 10.7547 9.37106 10.8395 9.43357 10.902C9.49608 10.9646 9.58087 10.9997 9.66927 10.9997C9.75768 10.9997 9.84246 10.9646 9.90497 10.902C9.96749 10.8395 10.0026 10.7547 10.0026 10.6663Z"
          fill="#151875"
        />
      </svg>
    </div>
  );
}
function Cart({ color }: any) {
  return (
    <div
      className="p-2  top-2 left-4 z-20 rounded-full cursor-pointer"
      style={
        color
          ? { backgroundColor: "#EEEFFB", position: "absolute", top: "8px" }
          : { backgroundColor: "#FFF", position: "absolute", bottom: "0px, " }
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        className=""
      >
        <path
          d="M0.980469 1.36426C0.980469 1.20679 1.04302 1.05576 1.15437 0.944413C1.26572 0.833063 1.41675 0.770508 1.57422 0.770508H2.01597C2.76805 0.770508 3.2193 1.27638 3.47659 1.74663C3.64839 2.06013 3.77268 2.42351 3.87005 2.75284C3.89639 2.75076 3.9228 2.74971 3.94922 2.74967H13.8435C14.5006 2.74967 14.9756 3.37826 14.7951 4.0108L13.3479 9.08459C13.2181 9.53969 12.9436 9.94011 12.5659 10.2252C12.1883 10.5104 11.7279 10.6647 11.2547 10.6648H6.54589C6.0689 10.6648 5.60511 10.5081 5.2258 10.2189C4.84649 9.92974 4.57266 9.52398 4.44639 9.06401L3.84472 6.86951L2.84722 3.50651L2.84643 3.50017C2.72293 3.0513 2.60734 2.63092 2.43476 2.31742C2.2693 2.01263 2.1363 1.95801 2.01676 1.95801H1.57422C1.41675 1.95801 1.26572 1.89545 1.15437 1.7841C1.04302 1.67275 0.980469 1.52173 0.980469 1.36426ZM4.99659 6.58134L5.59114 8.74972C5.70989 9.1788 6.10018 9.47726 6.54589 9.47726H11.2547C11.4698 9.47726 11.6791 9.40717 11.8508 9.2776C12.0225 9.14804 12.1473 8.96606 12.2063 8.75922L13.5814 3.93717H4.21443L4.98551 6.53938L4.99659 6.58134Z"
          // fill="#2F1AC4"
          style={color ? { fill: `${color}` } : { fill: "#151875" }}
        />
        <path
          d="M7.70964 13.0413C7.70964 13.4613 7.54282 13.864 7.24589 14.1609C6.94895 14.4579 6.54623 14.6247 6.1263 14.6247C5.70638 14.6247 5.30365 14.4579 5.00672 14.1609C4.70978 13.864 4.54297 13.4613 4.54297 13.0413C4.54297 12.6214 4.70978 12.2187 5.00672 11.9218C5.30365 11.6248 5.70638 11.458 6.1263 11.458C6.54623 11.458 6.94895 11.6248 7.24589 11.9218C7.54282 12.2187 7.70964 12.6214 7.70964 13.0413ZM6.52214 13.0413C6.52214 12.9364 6.48043 12.8357 6.4062 12.7614C6.33197 12.6872 6.23128 12.6455 6.1263 12.6455C6.02132 12.6455 5.92064 12.6872 5.84641 12.7614C5.77217 12.8357 5.73047 12.9364 5.73047 13.0413C5.73047 13.1463 5.77217 13.247 5.84641 13.3212C5.92064 13.3955 6.02132 13.4372 6.1263 13.4372C6.23128 13.4372 6.33197 13.3955 6.4062 13.3212C6.48043 13.247 6.52214 13.1463 6.52214 13.0413Z"
          style={color ? { fill: `${color}` } : { fill: "#151875" }}
        />
        <path
          d="M13.2526 13.0413C13.2526 13.4613 13.0858 13.864 12.7889 14.1609C12.4919 14.4579 12.0892 14.6247 11.6693 14.6247C11.2493 14.6247 10.8466 14.4579 10.5497 14.1609C10.2528 13.864 10.0859 13.4613 10.0859 13.0413C10.0859 12.6214 10.2528 12.2187 10.5497 11.9218C10.8466 11.6248 11.2493 11.458 11.6693 11.458C12.0892 11.458 12.4919 11.6248 12.7889 11.9218C13.0858 12.2187 13.2526 12.6214 13.2526 13.0413ZM12.0651 13.0413C12.0651 12.9364 12.0234 12.8357 11.9492 12.7614C11.8749 12.6872 11.7743 12.6455 11.6693 12.6455C11.5643 12.6455 11.4636 12.6872 11.3894 12.7614C11.3151 12.8357 11.2734 12.9364 11.2734 13.0413C11.2734 13.1463 11.3151 13.247 11.3894 13.3212C11.4636 13.3955 11.5643 13.4372 11.6693 13.4372C11.7743 13.4372 11.8749 13.3955 11.9492 13.3212C12.0234 13.247 12.0651 13.1463 12.0651 13.0413Z"
          style={color ? { fill: `${color}` } : { fill: "#151875" }}
        />
      </svg>
    </div>
  );
}

function Star() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M11.7551 4.94358L8.46921 4.46603L7.00034 1.48818C6.96022 1.40665 6.89422 1.34064 6.81269 1.30052C6.60821 1.19958 6.35973 1.2837 6.25749 1.48818L4.78862 4.46603L1.50276 4.94358C1.41217 4.95652 1.32934 4.99923 1.26593 5.06393C1.18926 5.14273 1.14702 5.24874 1.14847 5.35867C1.14993 5.4686 1.19497 5.57345 1.27369 5.65019L3.65106 7.96802L3.08939 11.2409C3.07622 11.3171 3.08465 11.3954 3.11371 11.467C3.14278 11.5386 3.19132 11.6006 3.25384 11.646C3.31636 11.6914 3.39035 11.7184 3.46742 11.7239C3.54449 11.7294 3.62156 11.7132 3.68988 11.6771L6.62892 10.1319L9.56795 11.6771C9.64818 11.7198 9.74137 11.734 9.83066 11.7185C10.0558 11.6797 10.2073 11.4661 10.1684 11.2409L9.60677 7.96802L11.9841 5.65019C12.0488 5.58677 12.0916 5.50395 12.1045 5.41336C12.1394 5.18688 11.9816 4.97723 11.7551 4.94358Z"
        fill="#FFC416"
      />
    </svg>
  );
}
function CircleOrange() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
    >
      <circle cx="6.07391" cy="6.07391" r="6.07391" fill="#DE9034" />
    </svg>
  );
}

function CircleRed() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
    >
      <circle cx="6.22235" cy="6.07391" r="6.07391" fill="#E60584" />
    </svg>
  );
}
function CircleBlue() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
    >
      <circle cx="6.37079" cy="6.07391" r="6.07391" fill="#5E37FF" />
    </svg>
  );
}

function BlueHeart() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
    >
      <path
        d="M15.1212 3.60555C14.3249 2.80906 13.2692 2.3248 12.1461 2.24084C11.023 2.15688 9.90703 2.4788 9.00118 3.14805C8.04692 2.43828 6.85918 2.11644 5.67712 2.24733C4.49507 2.37823 3.40651 2.95214 2.63066 3.85349C1.85481 4.75485 1.4493 5.91669 1.49578 7.10506C1.54227 8.29343 2.0373 9.42006 2.88118 10.2581L8.46868 15.8456C8.5384 15.9158 8.62136 15.9716 8.71275 16.0097C8.80414 16.0478 8.90217 16.0674 9.00118 16.0674C9.10019 16.0674 9.19822 16.0478 9.28962 16.0097C9.38101 15.9716 9.46396 15.9158 9.53368 15.8456L15.1212 10.2581C15.5582 9.82135 15.9048 9.30281 16.1413 8.73208C16.3779 8.16135 16.4996 7.5496 16.4996 6.9318C16.4996 6.31401 16.3779 5.70226 16.1413 5.13153C15.9048 4.5608 15.5582 4.04226 15.1212 3.60555ZM14.0637 9.20055L9.00118 14.2556L3.93868 9.20055C3.49256 8.75258 3.18866 8.18284 3.0651 7.56281C2.94155 6.94278 3.00383 6.30007 3.24415 5.7153C3.48446 5.13053 3.89211 4.62975 4.41594 4.27577C4.93978 3.92179 5.55648 3.73038 6.18868 3.72555C7.03327 3.72762 7.84251 4.06481 8.43868 4.66305C8.5084 4.73335 8.59136 4.78915 8.68275 4.82722C8.77414 4.8653 8.87217 4.8849 8.97118 4.8849C9.07019 4.8849 9.16822 4.8653 9.25962 4.82722C9.35101 4.78915 9.43396 4.73335 9.50368 4.66305C10.1174 4.13122 10.9103 3.85241 11.7218 3.88307C12.5334 3.91373 13.303 4.25156 13.8748 4.8282C14.4467 5.40483 14.7781 6.17718 14.802 6.98895C14.826 7.80071 14.5406 8.59125 14.0037 9.20055H14.0637Z"
        fill="#535399"
      />
    </svg>
  );
}
export {
  LoginAvatar,
  Email,
  Phone,
  Heart,
  Cart,
  Search,
  Facebook,
  Instagram,
  Twitter,
  DownArrow,
  RightArrow,
  ZoomIn,
  HeartBlue,
  Star,
  CircleOrange,
  CircleRed,
  CircleBlue,
  BlueHeart,
  CartNew,
  CartNavbar,
  HeartBlueNew,
  ZoomInNew,
};
