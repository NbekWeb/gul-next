import React from "react";

const Icon = ({ type = "default" }) => {
  const renderIcon = () => {
    switch (type) {
      case "buyout":
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 10L15 4M7 10L9 4M10 14C10 14.5304 10.2107 15.0391 10.5858 15.4142C10.9609 15.7893 11.4696 16 12 16C12.5304 16 13.0391 15.7893 13.4142 15.4142C13.7893 15.0391 14 14.5304 14 14C14 13.4696 13.7893 12.9609 13.4142 12.5858C13.0391 12.2107 12.5304 12 12 12C11.4696 12 10.9609 12.2107 10.5858 12.5858C10.2107 12.9609 10 13.4696 10 14ZM5.00122 8H19.0002C19.2886 7.99997 19.5735 8.06229 19.8356 8.1827C20.0976 8.30311 20.3305 8.47876 20.5183 8.6976C20.7061 8.91645 20.8443 9.17331 20.9235 9.45059C21.0027 9.72786 21.021 10.019 20.9772 10.304L19.7222 17.456C19.6133 18.1644 19.2543 18.8105 18.7102 19.2771C18.1661 19.7438 17.473 20.0002 16.7562 20H7.24422C6.52761 20 5.8347 19.7434 5.29085 19.2768C4.74699 18.8102 4.38814 18.1643 4.27922 17.456L3.02422 10.304C2.98038 10.019 2.9987 9.72786 3.07792 9.45059C3.15714 9.17331 3.29538 8.91645 3.48316 8.6976C3.67095 8.47876 3.90383 8.30311 4.16586 8.1827C4.42788 8.06229 4.71285 7.99997 5.00122 8Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "chevron":
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.85671 0.70194C8.68607 0.701976 8.52244 0.76979 8.4018 0.890465L5.45102 3.84124C5.32868 3.95866 5.16568 4.02423 4.99612 4.02423C4.82655 4.02423 4.66355 3.95866 4.54121 3.84124L1.59043 0.890465C1.46908 0.773259 1.30655 0.708405 1.13784 0.70987C0.969135 0.711337 0.807754 0.779006 0.688457 0.898303C0.56916 1.0176 0.50149 1.17898 0.500024 1.34769C0.498558 1.51639 0.563413 1.67892 0.680619 1.80028L3.6314 4.75106C3.99919 5.10203 4.48805 5.29785 4.99644 5.29785C5.50483 5.29785 5.99368 5.10203 6.36148 4.75106L9.31161 1.80028C9.40157 1.71029 9.46283 1.59566 9.48764 1.47086C9.51246 1.34607 9.49972 1.21671 9.45103 1.09916C9.40234 0.981605 9.31989 0.881124 9.21411 0.810421C9.10832 0.739718 8.98394 0.701967 8.85671 0.70194Z"
              fill="currentColor"
            />
          </svg>
        );
      case "cashback":
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.94136 5.87903C4.43358 3.71435 6.65246 2.15642 9.19524 1.48802C11.738 0.819608 14.4361 1.08502 16.7999 2.23608C19.1637 3.38715 21.0366 5.34757 22.0785 7.76151C23.1203 10.1755 23.262 12.8829 22.478 15.3925C21.6941 17.9021 20.0365 20.0474 17.8059 21.4391C15.5752 22.8308 12.9195 23.3767 10.3209 22.9776C7.72216 22.5785 5.35267 21.2608 3.64248 19.2639C1.9323 17.267 0.994749 14.7231 1.00002 12.0939"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.10469 5.98897H2.2207V1.10498"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "delete":
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.36546 0C5.91359 0 5.54727 0.366312 5.54727 0.818182V2.45455H1.45637C1.0045 2.45455 0.638184 2.82086 0.638184 3.27273C0.638184 3.7246 1.0045 4.09091 1.45637 4.09091H14.5473C14.9991 4.09091 15.3655 3.7246 15.3655 3.27273C15.3655 2.82086 14.9991 2.45455 14.5473 2.45455H10.4564V0.818182C10.4564 0.366312 10.0901 0 9.63818 0H6.36546ZM8.82 2.45455H7.18364V1.63636H8.82V2.45455Z"
              fill="currentColor"
            />
            <path
              d="M6.36546 8.18182C6.81733 8.18182 7.18364 8.54813 7.18364 9V13.9091C7.18364 14.361 6.81733 14.7273 6.36546 14.7273C5.91359 14.7273 5.54727 14.361 5.54727 13.9091V9C5.54727 8.54813 5.91359 8.18182 6.36546 8.18182Z"
              fill="currentColor"
            />
            <path
              d="M10.4564 9C10.4564 8.54813 10.0901 8.18182 9.63818 8.18182C9.18631 8.18182 8.82 8.54813 8.82 9V13.9091C8.82 14.361 9.18631 14.7273 9.63818 14.7273C10.0901 14.7273 10.4564 14.361 10.4564 13.9091V9Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.45637 4.90909C1.21919 4.90909 0.993675 5.01202 0.838272 5.1912C0.682869 5.37038 0.612869 5.60818 0.646412 5.84298L2.08207 15.8926C2.25482 17.1018 3.29044 18 4.51194 18H11.4917C12.7132 18 13.7488 17.1018 13.9216 15.8926L15.3572 5.84298C15.3908 5.60818 15.3208 5.37038 15.1654 5.1912C15.01 5.01202 14.7845 4.90909 14.5473 4.90909H1.45637ZM3.70199 15.6612L2.39974 6.54545H13.6039L12.3017 15.6612C12.2441 16.0642 11.8989 16.3636 11.4917 16.3636H4.51194C4.10478 16.3636 3.75957 16.0642 3.70199 15.6612Z"
              fill="currentColor"
            />
          </svg>
        );
      case "delivery":
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 2.7334C0 1.35269 1.11929 0.233398 2.5 0.233398H10.8333C12.214 0.233398 13.3333 1.35269 13.3333 2.7334V3.56673H16.3095C16.5435 3.56673 16.7667 3.66508 16.9245 3.83776L19.7817 6.96276C19.9221 7.11636 20 7.31694 20 7.52506V12.7334C20 13.1936 19.6269 13.5667 19.1667 13.5667H17.3577C17.0145 14.5377 16.0885 15.2334 15 15.2334C13.9072 15.2334 12.9782 14.5323 12.6383 13.5553C12.5933 13.5628 12.5471 13.5667 12.5 13.5667H7.35775C7.01455 14.5377 6.08852 15.2334 5 15.2334C3.91148 15.2334 2.98545 14.5377 2.64225 13.5667H0.833333C0.373096 13.5667 0 13.1936 0 12.7334V2.7334ZM2.64225 11.9001C2.98545 10.9291 3.91148 10.2334 5 10.2334C6.08852 10.2334 7.01455 10.9291 7.35775 11.9001H11.6667V9.40006H1.66667V11.9001H2.64225ZM1.66667 7.7334H11.6667V2.7334C11.6667 2.27316 11.2936 1.90007 10.8333 1.90007H2.5C2.03976 1.90007 1.66667 2.27316 1.66667 2.7334V7.7334ZM13.3333 10.87V5.2334H15.9423L18.3333 7.8486V11.9001H17.3577C17.0145 10.9291 16.0885 10.2334 15 10.2334C14.3597 10.2334 13.7756 10.4741 13.3333 10.87ZM5 11.9001C4.53976 11.9001 4.16667 12.2732 4.16667 12.7334C4.16667 13.1936 4.53976 13.5667 5 13.5667C5.46024 13.5667 5.83333 13.1936 5.83333 12.7334C5.83333 12.2732 5.46024 11.9001 5 11.9001ZM15 11.9001C14.5398 11.9001 14.1667 12.2732 14.1667 12.7334C14.1667 13.1936 14.5398 13.5667 15 13.5667C15.4602 13.5667 15.8333 13.1936 15.8333 12.7334C15.8333 12.2732 15.4602 11.9001 15 11.9001Z"
              fill="currentColor"
            />
          </svg>
        );
      case "cash":
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.72727 0.142578C1.22104 0.142578 0 1.36362 0 2.86985V15.5971C0 17.1034 1.22104 18.3244 2.72727 18.3244H15.4545C16.9608 18.3244 18.1818 17.1034 18.1818 15.5971V14.5328C19.2411 14.1584 20 13.1482 20 11.9608V10.1426C20 8.95511 19.2411 7.94489 18.1818 7.57049V6.50621C18.1818 4.99998 16.9608 3.77894 15.4545 3.77894V2.86985C15.4545 1.36362 14.2335 0.142578 12.7273 0.142578H2.72727ZM2.72727 1.96076C2.2252 1.96076 1.81818 2.36777 1.81818 2.86985C1.81818 3.37193 2.2252 3.77894 2.72727 3.77894H13.6364V2.86985C13.6364 2.36777 13.2294 1.96076 12.7273 1.96076H2.72727ZM1.81818 5.44194V15.5971C1.81818 16.0992 2.2252 16.5062 2.72727 16.5062H15.4545C15.9566 16.5062 16.3636 16.0992 16.3636 15.5971V14.688H13.6364C12.1301 14.688 10.9091 13.467 10.9091 11.9608V10.1426C10.9091 8.63635 12.1301 7.41531 13.6364 7.41531H16.3636V6.50621C16.3636 6.00414 15.9566 5.59712 15.4545 5.59712H2.72727C2.40851 5.59712 2.10253 5.54244 1.81818 5.44194ZM13.6364 9.23349C13.1343 9.23349 12.7273 9.6405 12.7273 10.1426V11.9608C12.7273 12.4628 13.1343 12.8699 13.6364 12.8699H17.2727C17.7748 12.8699 18.1818 12.4628 18.1818 11.9608V10.1426C18.1818 9.6405 17.7748 9.23349 17.2727 9.23349H13.6364Z"
              fill="currentColor"
            />
          </svg>
        );
      case "flower":
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.36435 3.93711C6.38723 2.79542 6.75389 1.85164 7.43985 1.18973C8.14085 0.513305 9.06967 0.233398 9.99958 0.233398C10.9295 0.233398 11.8583 0.513305 12.5593 1.18973C13.2453 1.85165 13.6119 2.79545 13.6348 3.93716C14.6349 3.3862 15.6355 3.23188 16.5517 3.49497C17.488 3.76384 18.1948 4.42827 18.6598 5.23359C19.1247 6.03892 19.3467 6.98325 19.1114 7.92855C18.8812 8.85344 18.2473 9.64278 17.2703 10.2334C18.2473 10.824 18.8811 11.6134 19.1114 12.5382C19.3467 13.4835 19.1247 14.4279 18.6597 15.2332C18.1947 16.0385 17.4879 16.7029 16.5516 16.9718C15.6355 17.2349 14.6349 17.0806 13.6349 16.5297C13.612 17.6714 13.2453 18.6152 12.5594 19.2771C11.8584 19.9535 10.9295 20.2334 9.99963 20.2334C9.06973 20.2334 8.14091 19.9535 7.4399 19.2771C6.75393 18.6152 6.38727 17.6713 6.3644 16.5296C5.36429 17.0806 4.36368 17.2349 3.44753 16.9718C2.51122 16.703 1.80441 16.0385 1.33946 15.2332C0.874503 14.4279 0.652499 13.4835 0.887798 12.5382C1.11802 11.6134 1.75188 10.824 2.72895 10.2334C1.75192 9.64277 1.11807 8.85344 0.887852 7.92857C0.652553 6.98327 0.874557 6.03893 1.33951 5.23361C1.80446 4.42829 2.51128 3.76386 3.44758 3.49499C4.36371 3.23191 5.36427 3.38621 6.36435 3.93711ZM5.48896 11.1501C4.8807 11.2426 4.2565 11.4496 3.73701 11.7495C3.03104 12.1571 2.74557 12.6021 2.65214 12.9774C2.55612 13.3632 2.62588 13.825 2.91405 14.3241C3.20221 14.8232 3.56727 15.1145 3.94937 15.2243C4.32111 15.331 4.84922 15.3063 5.55519 14.8987C6.07512 14.5985 6.56688 14.161 6.95124 13.6799C6.95908 13.6621 6.96699 13.6442 6.97497 13.6265C6.26056 12.9892 5.74869 12.1296 5.54795 11.1564C5.5283 11.1544 5.50864 11.1523 5.48896 11.1501ZM14.4513 11.1564L14.5103 11.1501C15.1185 11.2426 15.7427 11.4496 16.2621 11.7495C16.9681 12.1571 17.2536 12.6021 17.347 12.9774C17.443 13.3632 17.3733 13.825 17.0851 14.3241C16.7969 14.8232 16.4319 15.1145 16.0498 15.2243C15.678 15.331 15.1499 15.3063 14.444 14.8987C13.9241 14.5986 13.4325 14.1611 13.0481 13.6802L13.0243 13.6265C13.7387 12.9892 14.2506 12.1296 14.4513 11.1564ZM8.18139 4.05158C8.18139 3.2364 8.42403 2.76668 8.70236 2.49811C8.98843 2.22207 9.42325 2.05158 9.99958 2.05158C10.5759 2.05158 11.0107 2.22207 11.2968 2.49811C11.5751 2.76668 11.8178 3.2364 11.8178 4.05158C11.8178 4.652 11.6847 5.29673 11.4602 5.87014L11.4265 5.9164C10.9778 5.76816 10.4981 5.68793 9.99963 5.68793C9.50118 5.68793 9.02147 5.76816 8.57271 5.91641L8.53881 5.86987C8.31444 5.29653 8.18139 4.65191 8.18139 4.05158ZM6.95107 6.78659L6.97492 6.84034C6.25699 7.48079 5.74361 8.3457 5.54498 9.32488C4.91917 9.23684 4.2725 9.02643 3.73706 8.7173C3.03109 8.3097 2.74562 7.86471 2.6522 7.4894C2.55617 7.10362 2.62594 6.64182 2.9141 6.1427C3.20227 5.64359 3.56732 5.35227 3.94942 5.24254C4.32117 5.13579 4.84928 5.16052 5.55525 5.56811C6.07508 5.86823 6.56674 6.30569 6.95107 6.78659ZM13.0243 6.84028L13.048 6.78685C13.4323 6.30584 13.9241 5.86827 14.444 5.56809C15.15 5.1605 15.6781 5.13577 16.0498 5.24252C16.4319 5.35225 16.797 5.64357 17.0852 6.14269C17.3733 6.6418 17.4431 7.10361 17.3471 7.48938C17.2536 7.8647 16.9682 8.30969 16.2622 8.71728C15.7268 9.02641 15.0801 9.23682 14.4543 9.32487C14.2556 8.34566 13.7422 7.48073 13.0243 6.84028ZM9.99963 12.9607C11.5059 12.9607 12.7269 11.7396 12.7269 10.2334C12.7269 8.72715 11.5059 7.50611 9.99963 7.50611C8.4934 7.50611 7.27236 8.72715 7.27236 10.2334C7.27236 11.7396 8.4934 12.9607 9.99963 12.9607ZM9.99963 14.7788C10.5031 14.7788 10.9875 14.697 11.4401 14.5459C11.6767 15.1318 11.8178 15.797 11.8178 16.4152C11.8178 17.2304 11.5752 17.7001 11.2969 17.9687C11.0108 18.2447 10.576 18.4152 9.99963 18.4152C9.4233 18.4152 8.98849 18.2447 8.70241 17.9687C8.42409 17.7001 8.18145 17.2304 8.18145 16.4152C8.18145 15.797 8.32254 15.1318 8.55916 14.5459C9.01181 14.697 9.49616 14.7788 9.99963 14.7788Z"
              fill="currentColor"
            />
          </svg>
        );

      case "search":
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_194_1608)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.7715 23.6572C19.473 25.5381 16.5349 26.6666 13.3333 26.6666C5.96952 26.6666 0 20.6971 0 13.3333C0 5.96952 5.96952 0 13.3333 0C20.6971 0 26.6666 5.96952 26.6666 13.3333C26.6666 16.535 25.5381 19.4731 23.6571 21.7716L27.6094 25.7239C28.1301 26.2446 28.1301 27.0888 27.6094 27.6095C27.0887 28.1302 26.2445 28.1302 25.7238 27.6095L21.7715 23.6572ZM23.9999 13.3333C23.9999 19.2243 19.2243 23.9999 13.3333 23.9999C7.44227 23.9999 2.66666 19.2243 2.66666 13.3333C2.66666 7.44227 7.44227 2.66666 13.3333 2.66666C19.2243 2.66666 23.9999 7.44227 23.9999 13.3333Z"
                fill="currentColor"
              />
            </g>
          </svg>
        );
      case "heart":
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.52562 3.87211C4.44034 4.18847 2.54545 5.94001 2.54545 9.20017C2.54545 10.7849 3.20751 12.5219 4.33669 14.3054C5.45763 16.0759 6.9737 17.7897 8.52479 19.3018C10.0712 20.8093 11.6226 22.0877 12.79 22.9904C13.2688 23.3607 13.6812 23.6664 14 23.8975C14.3188 23.6664 14.7312 23.3607 15.21 22.9904C16.3774 22.0877 17.9288 20.8093 19.4752 19.3018C21.0263 17.7897 22.5424 16.0759 23.6633 14.3054C24.7925 12.5219 25.4545 10.7849 25.4545 9.20017C25.4545 5.94001 23.5597 4.18847 21.4744 3.87211C19.3568 3.55084 16.6856 4.66545 15.1563 7.99039C14.9486 8.44195 14.497 8.73129 14 8.73129C13.503 8.73129 13.0514 8.44195 12.8437 7.99039C11.3144 4.66545 8.64322 3.55084 6.52562 3.87211ZM14 25.4549L14.7103 26.511C14.2808 26.7999 13.7192 26.7999 13.2897 26.511L14 25.4549ZM14 4.94483C11.9444 2.13094 8.93672 0.931725 6.1438 1.35545C2.73321 1.87289 0 4.76554 0 9.20017C0 11.4628 0.928853 13.6814 2.18604 15.667C3.45146 17.6657 5.11721 19.5347 6.74794 21.1244C8.38338 22.7188 10.0138 24.0613 11.2328 25.004C11.8433 25.4762 12.3532 25.85 12.7124 26.107C12.892 26.2356 13.0341 26.3351 13.1323 26.4032C13.1815 26.4372 13.2197 26.4634 13.2462 26.4815L13.277 26.5024L13.2857 26.5083L13.2897 26.511C13.2897 26.511 13.2897 26.511 14 25.4549C14.7103 26.511 14.7103 26.511 14.7103 26.511L14.7143 26.5083L14.723 26.5024L14.7538 26.4815C14.7803 26.4634 14.8185 26.4372 14.8677 26.4032C14.9659 26.3351 15.108 26.2356 15.2876 26.107C15.6468 25.85 16.1567 25.4762 16.7672 25.004C17.9862 24.0613 19.6166 22.7188 21.2521 21.1244C22.8828 19.5347 24.5485 17.6657 25.814 15.667C27.0711 13.6814 28 11.4628 28 9.20017C28 4.76554 25.2668 1.87289 21.8562 1.35545C19.0633 0.931725 16.0556 2.13094 14 4.94483Z"
              fill="currentColor"
            />
          </svg>
        );
      case "bag":
        return (
          <svg
            width="26"
            height="1em"
            viewBox="0 0 26 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.72692 6.36364C6.72692 2.8491 9.57601 0 13.0906 0C16.6051 0 19.4542 2.8491 19.4542 6.36364H21.9996C24.1084 6.36364 25.8178 8.0731 25.8178 10.1818V21.6364C25.8178 25.1509 22.9687 28 19.4542 28H6.72692C3.21238 28 0.363281 25.1509 0.363281 21.6364V10.1818C0.363281 8.0731 2.07274 6.36364 4.18146 6.36364H6.72692ZM9.27237 6.36364C9.27237 4.25491 10.9818 2.54545 13.0906 2.54545C15.1993 2.54545 16.9087 4.25491 16.9087 6.36364H9.27237ZM6.72692 8.90909V12.7273C6.72692 13.4302 7.29674 14 7.99964 14C8.70255 14 9.27237 13.4302 9.27237 12.7273V8.90909H16.9087V12.7273C16.9087 13.4302 17.4786 14 18.1815 14C18.8844 14 19.4542 13.4302 19.4542 12.7273V8.90909H21.9996C22.7026 8.90909 23.2724 9.47891 23.2724 10.1818V21.6364C23.2724 23.7451 21.5629 25.4545 19.4542 25.4545H6.72692C4.61819 25.4545 2.90874 23.7451 2.90874 21.6364V10.1818C2.90874 9.47891 3.47856 8.90909 4.18146 8.90909H6.72692Z"
              fill="currentColor"
            />
          </svg>
        );
      case "user":
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.9993 8C21.9993 12.4183 18.4176 16 13.9993 16C9.58107 16 5.99935 12.4183 5.99935 8C5.99935 3.58172 9.58107 0 13.9993 0C18.4176 0 21.9993 3.58172 21.9993 8ZM19.3327 8C19.3327 10.9455 16.9449 13.3333 13.9993 13.3333C11.0538 13.3333 8.66602 10.9455 8.66602 8C8.66602 5.05448 11.0538 2.66667 13.9993 2.66667C16.9449 2.66667 19.3327 5.05448 19.3327 8Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.9994 17.3333C10.0859 17.3333 7.26428 18.1451 5.24021 19.3623C3.20806 20.5844 2.06664 22.1633 1.43633 23.5441C0.905013 24.7081 1.14683 25.8943 1.85274 26.7394C2.52563 27.545 3.57188 28 4.66608 28H23.3327C24.4269 28 25.4731 27.545 26.146 26.7395C26.8519 25.8944 27.0938 24.7082 26.5625 23.5442C25.9322 22.1633 24.7908 20.5844 22.7587 19.3623C20.7346 18.1451 17.913 17.3333 13.9994 17.3333ZM3.86222 24.6515C4.29976 23.6929 5.10348 22.5562 6.61448 21.6476C8.13356 20.7341 10.4531 20 13.9994 20C17.5459 20 19.8653 20.7341 21.3844 21.6476C22.8954 22.5563 23.6991 23.6929 24.1366 24.6515C24.1882 24.7647 24.186 24.8327 24.1808 24.8675C24.1749 24.9071 24.1554 24.9629 24.0994 25.0299C23.9792 25.1738 23.7113 25.3333 23.3327 25.3333H4.66608C4.28751 25.3333 4.01956 25.1738 3.89935 25.0299C3.84338 24.9629 3.82391 24.9071 3.81799 24.8675C3.8128 24.8327 3.81055 24.7647 3.86222 24.6515Z"
              fill="currentColor"
            />
          </svg>
        );
      case "arrow":
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.2808 6.6188C19.6225 6.27709 19.6225 5.72307 19.2808 5.38136L14.9497 1.05033C14.608 0.708625 14.054 0.708625 13.7123 1.05033C13.3706 1.39204 13.3706 1.94606 13.7123 2.28777L16.5496 5.12508L1.33794 5.12508C0.854693 5.12508 0.462942 5.51683 0.462943 6.00008C0.462942 6.48333 0.854693 6.87508 1.33794 6.87508L16.5496 6.87508L13.7123 9.71239C13.3706 10.0541 13.3706 10.6081 13.7123 10.9498C14.054 11.2915 14.608 11.2915 14.9497 10.9498L19.2808 6.6188Z"
              fill="currentColor"
            />
          </svg>
        );
      case "arr":
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 23 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.1722 4.87388L18.4935 1.1766C18.3156 0.997868 18.0745 0.897461 17.823 0.897461C17.5715 0.897461 17.3303 0.997868 17.1525 1.1766C16.9747 1.35539 16.8748 1.59785 16.8748 1.85065C16.8748 2.10346 16.9747 2.34592 17.1525 2.52471L20.5239 5.91594H1.19055C0.939031 5.91594 0.69781 6.01639 0.519957 6.19518C0.342104 6.37398 0.242188 6.61648 0.242188 6.86934H0.242188C0.242188 7.12219 0.342104 7.36469 0.519957 7.54349C0.69781 7.72229 0.939031 7.82273 1.19055 7.82273H20.5818L17.1525 11.2693C17.0643 11.3578 16.9944 11.463 16.9466 11.5787C16.8989 11.6944 16.8744 11.8185 16.8744 11.9438C16.8744 12.0691 16.8989 12.1931 16.9466 12.3089C16.9944 12.4246 17.0643 12.5298 17.1525 12.6183C17.3303 12.7971 17.5715 12.8975 17.823 12.8975C18.0745 12.8975 18.3156 12.7971 18.4935 12.6183L22.1731 8.92009C22.7051 8.38254 23.0037 7.65506 23.0035 6.89679C23.0033 6.13852 22.7044 5.41118 22.1722 4.87388Z"
              fill="currentColor"
            />
          </svg>
        );
      case "check":
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 14 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.795 0.305123C14.0683 0.57849 14.0683 1.02171 13.795 1.29507L5.39497 9.69507C5.12161 9.96844 4.67839 9.96844 4.40503 9.69507L0.205025 5.49507C-0.0683418 5.2217 -0.0683418 4.77849 0.205025 4.50512C0.478392 4.23176 0.921608 4.23176 1.19497 4.50512L4.9 8.21015L12.805 0.305123C13.0784 0.0317559 13.5216 0.0317559 13.795 0.305123Z"
              fill="currentColor"
            />
          </svg>
        );
      case "plus":
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.0905 9.01067C17.0904 8.75785 16.99 8.51538 16.8112 8.33661C16.6324 8.15783 16.39 8.05738 16.1372 8.05734L9.95333 8.05734L9.95333 1.87352C9.95329 1.62069 9.85284 1.37823 9.67406 1.19945C9.49529 1.02068 9.25283 0.920226 9 0.920188C8.74717 0.920226 8.50471 1.02068 8.32594 1.19945C8.14716 1.37823 8.04671 1.62069 8.04667 1.87352L8.04667 8.05734L1.86284 8.05734C1.61002 8.05738 1.36756 8.15783 1.18878 8.33661C1.01001 8.51538 0.909555 8.75784 0.909517 9.01067C0.909554 9.2635 1.01001 9.50596 1.18878 9.68473C1.36756 9.86351 1.61002 9.96396 1.86285 9.964L8.04667 9.964L8.04667 16.1478C8.04671 16.4007 8.14716 16.6431 8.32594 16.8219C8.50471 17.0007 8.74717 17.1011 9 17.1012C9.25283 17.1011 9.49529 17.0007 9.67406 16.8219C9.85284 16.6431 9.95329 16.4007 9.95333 16.1478V9.964L16.1372 9.964C16.39 9.96396 16.6324 9.86351 16.8112 9.68473C16.99 9.50596 17.0904 9.2635 17.0905 9.01067Z"
              fill="currentColor"
            />
          </svg>
        );
      case "minus":
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 12 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 0.0107422H1C0.447715 0.0107422 0 0.458457 0 1.01074C0 1.56303 0.447715 2.01074 1 2.01074H11C11.5523 2.01074 12 1.56303 12 1.01074C12 0.458457 11.5523 0.0107422 11 0.0107422Z"
              fill="currentColor"
            />
          </svg>
        );
      case "tel":
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_27_349)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.87579 1.48137C3.19328 -0.370098 5.84161 -0.536407 7.31945 1.26772C7.44407 1.41985 7.56969 1.57335 7.69531 1.72684C8.79321 3.06836 9.89058 4.40922 10.3124 4.83267C10.7206 5.24235 10.7986 5.87828 10.5016 6.37509L8.19074 10.2411C8.33885 10.4844 8.53953 10.7747 8.79627 11.1058C9.25409 11.6963 9.83908 12.3518 10.4915 13.0066C11.5901 14.1094 12.82 15.1507 13.8788 15.8544L17.6703 13.5709C18.132 13.2928 18.7189 13.3405 19.1299 13.6897L22.7885 16.7971C24.4914 18.2435 24.3823 20.9124 22.5671 22.2138C19.7679 24.2208 16.0057 24.6981 12.9234 22.8098C10.7984 21.508 8.19464 19.6702 5.86522 17.332C3.75834 15.2171 2.20828 13.0268 1.11421 11.1856C-0.762084 8.0281 -0.106939 4.26768 1.87579 1.48137ZM5.37626 2.87154C4.98745 2.39689 4.31372 2.39994 3.92292 2.94914C2.36777 5.13458 2.03299 7.80228 3.27478 9.89201C4.28524 11.5925 5.71276 13.6077 7.6441 15.5464C9.78794 17.6983 12.2152 19.4175 14.2339 20.6543C16.3141 21.9286 18.9826 21.6806 21.1049 20.1589C21.5855 19.8144 21.6143 19.1078 21.1635 18.7248L18.1924 16.2013L14.5174 18.4147C14.1283 18.649 13.6437 18.6548 13.2491 18.4299C11.8047 17.6066 10.1164 16.2014 8.71257 14.7922C8.0038 14.0808 7.34605 13.3469 6.81096 12.6568C6.29075 11.9858 5.83036 11.2853 5.58281 10.6484C5.44132 10.2843 5.47575 9.875 5.67605 9.5399L7.86491 5.87801C7.27776 5.19616 6.4977 4.24242 5.77664 3.36082C5.64051 3.19438 5.50649 3.03052 5.37626 2.87154Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_27_349">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
      case "menu":
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 16.1999C13 15.7581 13.3582 15.3999 13.8 15.3999H28.2C28.6418 15.3999 29 15.7581 29 16.1999C29 16.6417 28.6418 16.9999 28.2 16.9999L13.8 16.9999C13.3582 16.9999 13 16.6417 13 16.1999Z"
              fill="currentColor"
            />
            <path
              d="M13 20.9999C13 20.5581 13.3582 20.1999 13.8 20.1999L28.2 20.1999C28.6418 20.1999 29 20.5581 29 20.9999C29 21.4417 28.6418 21.7999 28.2 21.7999L13.8 21.7999C13.3582 21.7999 13 21.4417 13 20.9999Z"
              fill="currentColor"
            />
            <path
              d="M13.8 24.9999C13.3582 24.9999 13 25.3581 13 25.7999C13 26.2417 13.3582 26.5999 13.8 26.5999L28.2 26.5999C28.6418 26.5999 29 26.2417 29 25.7999C29 25.3581 28.6418 24.9999 28.2 24.9999L13.8 24.9999Z"
              fill="currentColor"
            />
            <circle
              cx="21"
              cy="21"
              r="20"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        );
      case "close":
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.38702 0.839294C1.06972 0.521993 0.555277 0.521993 0.237976 0.839294C-0.0793253 1.1566 -0.0793253 1.67104 0.237976 1.98834L5.35101 7.10138L0.237976 12.2144C-0.0793248 12.5317 -0.0793251 13.0462 0.237976 13.3635C0.555277 13.6808 1.06972 13.6808 1.38702 13.3635L6.50006 8.25043L11.613 13.3633C11.9303 13.6806 12.4447 13.6806 12.762 13.3633C13.0793 13.046 13.0793 12.5316 12.762 12.2143L7.64911 7.10138L12.762 1.98847C13.0793 1.67116 13.0793 1.15672 12.762 0.839417C12.4447 0.522116 11.9303 0.522116 11.613 0.839417L6.50006 5.95233L1.38702 0.839294Z"
              fill="currentColor"
            />
          </svg>
        );
      case "insta":
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.00021 0.508194C5.51862 0.508194 2.21251 0.19873 0.949703 3.43708C0.428088 4.77458 0.503837 6.5116 0.503837 8.9988C0.503837 11.1813 0.433841 13.2326 0.949703 14.5596C2.20963 17.7998 5.5426 17.4894 8.99829 17.4894C12.3322 17.4894 15.7697 17.8362 17.0478 14.5596C17.5704 13.2087 17.4937 11.4975 17.4937 8.9988C17.4937 5.68189 17.6768 3.54055 16.0669 1.93288C14.4369 0.30412 12.2325 0.508194 8.99638 0.508194H9.00021ZM8.23888 2.03827C15.5012 2.02677 16.4255 1.22006 15.9154 12.4269C15.7342 16.3905 12.7138 15.9555 9.00117 15.9555C2.23168 15.9555 2.03704 15.762 2.03704 8.99497C2.03704 2.14941 2.574 2.0421 8.23888 2.03635V2.03827ZM13.5356 3.44762C12.9727 3.44762 12.5163 3.90367 12.5163 4.46607C12.5163 5.02847 12.9727 5.48452 13.5356 5.48452C14.0984 5.48452 14.5548 5.02847 14.5548 4.46607C14.5548 3.90367 14.0984 3.44762 13.5356 3.44762ZM9.00021 4.63853C6.59062 4.63853 4.63744 6.59112 4.63744 8.9988C4.63744 11.4065 6.59062 13.3581 9.00021 13.3581C11.4098 13.3581 13.362 11.4065 13.362 8.9988C13.362 6.59112 11.4098 4.63853 9.00021 4.63853ZM9.00021 6.1686C12.7445 6.1686 12.7493 11.829 9.00021 11.829C5.25686 11.829 5.25111 6.1686 9.00021 6.1686Z"
              fill="currentColor"
            />
          </svg>
        );
      case "face":
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.69875 3.32271H9.25071V0.619708C8.98296 0.582875 8.06212 0.5 6.98971 0.5C2.07954 0.5 3.41546 6.06042 3.21996 6.875H0.75V9.89675H3.21925V17.5H6.24667V9.89746H8.61604L8.99217 6.87571H6.24596C6.37913 4.87538 5.70692 3.32271 7.69875 3.32271Z"
              fill="currentColor"
            />
          </svg>
        );
      case "tg":
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.17066 10.2536L6.88945 14.209C7.29179 14.209 7.46604 14.0361 7.67501 13.8286L9.56134 12.0259L13.47 14.8883C14.1869 15.2878 14.6919 15.0774 14.8853 14.2288L17.451 2.2067L17.4517 2.20599C17.679 1.1463 17.0684 0.731912 16.37 0.991876L1.28923 6.76564C0.259995 7.16515 0.275579 7.73891 1.11427 7.99888L4.96982 9.19812L13.9255 3.59436C14.347 3.31527 14.7302 3.46969 14.415 3.74878L7.17066 10.2536Z"
              fill="currentColor"
            />
          </svg>
        );
      case "wk":
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.93756 2.08869C8.18214 1.54859 8.5302 1.29508 8.98174 1.2069C10.3175 0.931346 11.6533 0.920323 12.9985 1.15179C13.7699 1.28406 14.0615 1.66984 14.0615 2.59571C14.0615 3.81919 14.0145 5.04267 14.0145 6.26614C14.0145 6.85033 14.0051 7.43451 14.0897 8.00767C14.2026 8.84536 14.6824 9.02172 15.1997 8.44856C16.1781 7.39042 16.7895 6.02365 17.4104 4.66791C17.7396 3.95146 18.003 3.1799 18.2758 2.43038C18.4451 1.97846 18.6897 1.75802 19.1319 1.76904C20.43 1.78006 21.7282 1.747 23.0169 1.73597C23.9012 1.72495 24.221 2.16584 23.8447 3.09172C23.4591 4.03964 22.9793 4.94347 22.4713 5.82525C21.8693 6.86135 21.1826 7.84233 20.5429 8.85638C19.8656 9.94759 19.9032 10.3444 20.7122 11.3144C21.5683 12.3505 22.4431 13.3755 23.2615 14.4447C23.5437 14.8084 23.7601 15.2934 23.9012 15.7563C24.0893 16.3956 23.8259 16.8696 23.2427 16.9027C21.9445 16.9798 20.6464 17.0349 19.3576 17.0019C18.6521 16.9798 18.0595 16.5059 17.5703 15.9107C17.0811 15.3155 16.6296 14.6872 16.1404 14.103C15.8112 13.7062 15.4725 13.1551 14.9363 13.3314C14.3531 13.5188 14.2026 14.1802 14.1085 14.7974C14.0427 15.2052 14.0427 15.6351 14.0145 16.054C13.9768 16.5279 13.7699 16.8916 13.356 16.9137C11.5498 17.0349 9.78133 17.0019 8.13511 15.8666C6.67703 14.8195 5.49175 13.4968 4.4852 11.8985C2.71669 9.08785 1.32446 6.0457 0.120369 2.86025C-0.152433 2.13278 0.0357065 1.78006 0.713008 1.75802C1.80422 1.72495 2.89543 1.72495 3.99604 1.71393C4.56046 1.70291 4.90852 2.03358 5.1531 2.62878C5.73633 4.06168 6.31956 5.49458 6.97805 6.88339C7.26026 7.48962 7.66476 8.05176 8.08807 8.53674C8.57724 9.09888 9.03818 8.94456 9.1981 8.18402C9.55556 6.51966 9.58378 4.82222 9.21691 3.14683C9.10403 2.65083 8.7936 2.39731 8.40791 2.243C8.26681 2.18789 8.11629 2.15482 7.93756 2.08869Z"
              fill="currentColor"
            />
          </svg>
        );
      case "log":
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.7929 5.29289C16.1834 4.90237 16.8166 4.90237 17.2071 5.29289L22.2071 10.2929C22.5976 10.6834 22.5976 11.3166 22.2071 11.7071L17.2071 16.7071C16.8166 17.0976 16.1834 17.0976 15.7929 16.7071C15.4024 16.3166 15.4024 15.6834 15.7929 15.2929L19.0858 12L7.5 12C6.94771 12 6.5 11.5523 6.5 11C6.5 10.4477 6.94771 10 7.5 10L19.0858 10L15.7929 6.70711C15.4024 6.31658 15.4024 5.68342 15.7929 5.29289Z"
              fill="currentColor"
            />
            <path
              d="M8.5 0.999999C8.5 1.55228 8.05229 2 7.5 2L3.5 2C2.94772 2 2.5 2.44771 2.5 3L2.5 19C2.5 19.5523 2.94771 20 3.5 20L7.5 20C8.05228 20 8.5 20.4477 8.5 21C8.5 21.5523 8.05228 22 7.5 22L3.5 22C1.84314 22 0.499999 20.6569 0.499999 19L0.5 3C0.5 1.34315 1.84315 -9.0294e-07 3.5 -8.30516e-07L7.5 -6.55671e-07C8.05229 -6.3153e-07 8.5 0.447715 8.5 0.999999Z"
              fill="currentColor"
            />
          </svg>
        );
      case "ws":
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.0348 2.94313C13.4198 1.38199 11.2949 0.500122 9.03177 0.500122C2.53643 0.500122 -1.5421 7.53733 1.70132 13.1352L0.5 17.4999L4.98724 16.3298C6.94221 17.3859 8.54373 17.2924 9.03602 17.3547C16.5676 17.3547 20.3168 8.24282 15.0242 2.97076L15.0348 2.94313Z"
              fill="currentColor"
            />
            <path
              d="M9.04643 15.9069L9.04218 15.9062H9.03085C6.77696 15.9062 5.33694 14.8388 5.19527 14.7772L2.53906 15.4678L3.25092 12.8859L3.08163 12.6203C2.38039 11.504 2.00781 10.2184 2.00781 8.89452C2.00781 2.66622 9.61876 -0.44828 14.0231 3.95396C18.4169 8.31015 15.3321 15.9069 9.04643 15.9069Z"
              fill="currentColor"
            />
            <path
              d="M12.8998 10.6341L12.8934 10.6872C12.6802 10.581 11.6418 10.0731 11.4485 10.003C11.0143 9.84219 11.1368 9.97748 10.3031 10.9323C10.1791 11.0704 10.0559 11.081 9.84552 10.9854C9.63302 10.8792 8.9509 10.6561 8.14341 9.93356C7.51442 9.37044 7.09226 8.67983 6.96759 8.46733C6.76005 8.10892 7.19426 8.05792 7.5895 7.30993C7.66033 7.16118 7.62421 7.04431 7.57179 6.93876C7.51867 6.83252 7.0958 5.79128 6.91872 5.3762C6.74872 4.96254 6.57376 5.01496 6.44272 5.01496C6.03473 4.97954 5.73653 4.98521 5.47374 5.25862C4.3305 6.51519 4.61879 7.81142 5.59699 9.18982C7.51938 11.7058 8.54362 12.169 10.4164 12.8122C10.9222 12.973 11.3833 12.9503 11.7481 12.8979C12.1547 12.8334 12.9997 12.3872 13.1761 11.8878C13.3567 11.3885 13.3567 10.9741 13.3036 10.8785C13.2511 10.7828 13.1123 10.7297 12.8998 10.6341Z"
              style={{ fill: "var(--icon-color, #FAFAFA)" }}
            />
          </svg>
        );
      case "badge":
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.93517 4.5345C6.05697 4.5345 4.53438 6.05709 4.53438 7.93529C4.53438 9.81349 6.05697 11.3361 7.93517 11.3361C9.81337 11.3361 11.336 9.81349 11.336 7.93529C11.336 6.05709 9.81337 4.5345 7.93517 4.5345ZM6.80157 7.93529C6.80157 7.30922 7.3091 6.80169 7.93517 6.80169C8.56124 6.80169 9.06876 7.30922 9.06876 7.93529C9.06876 8.56136 8.56124 9.06889 7.93517 9.06889C7.3091 9.06889 6.80157 8.56136 6.80157 7.93529Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.1336 0.00012207C0.507528 0.00012207 0 0.50765 0 1.13372V11.3361C0 11.6367 0.119432 11.9251 0.332023 12.1377L11.1984 23.0041C12.5265 24.3321 14.6798 24.3321 16.0079 23.0041L23.0039 16.008C24.332 14.6799 24.332 12.5266 23.0039 11.1985L12.1375 0.332144C11.9249 0.119554 11.6366 0.00012207 11.336 0.00012207H1.1336ZM2.26719 10.8665V2.26731H10.8664L21.4008 12.8017C21.8435 13.2444 21.8435 13.9621 21.4008 14.4048L14.4047 21.4009C13.962 21.8436 13.2443 21.8436 12.8016 21.4009L2.26719 10.8665Z"
              fill="currentColor"
            />
          </svg>
        );
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
        );
    }
  };

  return <div>{renderIcon()}</div>;
};

export default Icon;
