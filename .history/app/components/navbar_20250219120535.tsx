"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import Image from 'next/image';
import MulseSVG from "../assets/img/mulse.svg";

import "./navbar.css";

import iconEN from "../assets/img/icon-en-sm.svg";
import iconID from "../assets/img/icon-id-sm.svg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isEnglish, setIsEnglish] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const IconEN = () => (
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.2" baseProfile="tiny" id="Layer_1" x="0px" y="0px" width="150px" height="150px" viewBox="0 0 150 150" xml:space="preserve">
            <g>
                <g>
                    <rect x="-1" y="139.344" fill="#B22436" width="152" height="11.656" />
                    <rect x="-1" y="127.689" fill="#FFFFFF" width="152" height="11.655" />
                    <rect x="-1" y="116.033" fill="#B22436" width="152" height="11.656" />
                    <rect x="-1" y="104.377" fill="#FFFFFF" width="152" height="11.656" />
                    <rect x="-1" y="92.722" fill="#B22436" width="152" height="11.655" />
                    <rect x="-1" y="81.066" fill="#FFFFFF" width="152" height="11.656" />
                    <rect x="-1" y="69.411" fill="#B22436" width="152" height="11.656" />
                    <rect x="-1" y="57.755" fill="#FFFFFF" width="152" height="11.656" />
                    <rect x="-1" y="46.1" fill="#B22436" width="152" height="11.655" />
                    <rect x="-1" y="34.444" fill="#FFFFFF" width="152" height="11.656" />
                    <rect x="-1" y="22.788" fill="#B22436" width="152" height="11.656" />
                    <rect x="-1" y="11.133" fill="#FFFFFF" width="152" height="11.655" />
                    <rect x="-1" y="-1" fill="#B22436" width="152" height="12.133" />
                    <rect x="-1" y="-1" fill="#3D3B6F" width="77.438" height="82.066" />
                    <g>
                        <polygon fill="#FFFFFF" points="64.958,74.136 63.981,77.366 66.751,75.438 69.521,77.366 68.543,74.136 71.232,72.098      67.859,72.029 66.751,68.842 65.643,72.029 62.27,72.098    " />
                        <polygon fill="#FFFFFF" points="45.807,74.136 44.829,77.366 47.599,75.438 50.369,77.366 49.392,74.136 52.08,72.098      48.707,72.029 47.599,68.842 46.491,72.029 43.118,72.098    " />
                        <polygon fill="#FFFFFF" points="26.654,74.136 25.677,77.366 28.447,75.438 31.217,77.366 30.239,74.136 32.928,72.098      29.555,72.029 28.447,68.842 27.339,72.029 23.966,72.098    " />
                        <polygon fill="#FFFFFF" points="7.502,74.136 6.525,77.366 9.295,75.438 12.064,77.366 11.087,74.136 13.776,72.098      10.403,72.029 9.295,68.842 8.187,72.029 4.813,72.098    " />
                        <polygon fill="#FFFFFF" points="64.958,57.72 63.981,60.95 66.751,59.022 69.521,60.95 68.543,57.72 71.232,55.682      67.859,55.613 66.751,52.426 65.643,55.613 62.27,55.682    " />
                        <polygon fill="#FFFFFF" points="45.807,57.72 44.829,60.95 47.599,59.022 50.369,60.95 49.392,57.72 52.08,55.682 48.707,55.613      47.599,52.426 46.491,55.613 43.118,55.682    " />
                        <polygon fill="#FFFFFF" points="26.654,57.72 25.677,60.95 28.447,59.022 31.217,60.95 30.239,57.72 32.928,55.682      29.555,55.613 28.447,52.426 27.339,55.613 23.966,55.682    " />
                        <polygon fill="#FFFFFF" points="7.502,57.72 6.525,60.95 9.295,59.022 12.064,60.95 11.087,57.72 13.776,55.682 10.403,55.613      9.295,52.426 8.187,55.613 4.813,55.682    " />
                        <polygon fill="#FFFFFF" points="64.958,41.304 63.981,44.534 66.751,42.606 69.521,44.534 68.543,41.304 71.232,39.266      67.859,39.197 66.751,36.01 65.643,39.197 62.27,39.266    " />
                        <polygon fill="#FFFFFF" points="45.807,41.304 44.829,44.534 47.599,42.606 50.369,44.534 49.392,41.304 52.08,39.266      48.707,39.197 47.599,36.01 46.491,39.197 43.118,39.266    " />
                        <polygon fill="#FFFFFF" points="26.654,41.304 25.677,44.534 28.447,42.606 31.217,44.534 30.239,41.304 32.928,39.266      29.555,39.197 28.447,36.01 27.339,39.197 23.966,39.266    " />
                        <polygon fill="#FFFFFF" points="7.502,41.304 6.525,44.534 9.295,42.606 12.064,44.534 11.087,41.304 13.776,39.266      10.403,39.197 9.295,36.01 8.187,39.197 4.813,39.266    " />
                        <polygon fill="#FFFFFF" points="67.859,22.781 66.751,19.594 65.643,22.781 62.27,22.85 64.958,24.888 63.981,28.118      66.751,26.19 69.521,28.118 68.543,24.888 71.232,22.85    " />
                        <polygon fill="#FFFFFF" points="45.807,24.888 44.829,28.118 47.599,26.19 50.369,28.118 49.392,24.888 52.08,22.85      48.707,22.781 47.599,19.594 46.491,22.781 43.118,22.85    " />
                        <polygon fill="#FFFFFF" points="26.654,24.888 25.677,28.118 28.447,26.19 31.217,28.118 30.239,24.888 32.928,22.85      29.555,22.781 28.447,19.594 27.339,22.781 23.966,22.85    " />
                        <polygon fill="#FFFFFF" points="7.502,24.888 6.525,28.118 9.295,26.19 12.064,28.118 11.087,24.888 13.776,22.85 10.403,22.781      9.295,19.594 8.187,22.781 4.813,22.85    " />
                        <polygon fill="#FFFFFF" points="66.751,3.178 65.643,6.365 62.27,6.434 64.958,8.472 63.981,11.702 66.751,9.774 69.521,11.702      68.543,8.472 71.232,6.434 67.859,6.365    " />
                        <polygon fill="#FFFFFF" points="48.707,6.365 47.599,3.178 46.491,6.365 43.118,6.434 45.807,8.472 44.829,11.702 47.599,9.774      50.369,11.702 49.392,8.472 52.08,6.434    " />
                        <polygon fill="#FFFFFF" points="29.555,6.365 28.447,3.178 27.339,6.365 23.966,6.434 26.654,8.472 25.677,11.702 28.447,9.774      31.217,11.702 30.239,8.472 32.928,6.434    " />
                        <polygon fill="#FFFFFF" points="10.403,6.365 9.295,3.178 8.187,6.365 4.813,6.434 7.502,8.472 6.525,11.702 9.295,9.774      12.064,11.702 11.087,8.472 13.776,6.434    " />
                        <polygon fill="#FFFFFF" points="57.979,14.756 56.871,11.569 55.763,14.756 52.39,14.825 55.079,16.864 54.102,20.093      56.871,18.166 59.641,20.093 58.664,16.864 61.352,14.825    " />
                        <polygon fill="#FFFFFF" points="38.827,14.756 37.719,11.569 36.611,14.756 33.237,14.825 35.927,16.864 34.949,20.093      37.719,18.166 40.489,20.093 39.511,16.864 42.2,14.825    " />
                        <polygon fill="#FFFFFF" points="19.675,14.756 18.567,11.569 17.459,14.756 14.085,14.825 16.774,16.864 15.797,20.093      18.567,18.166 21.336,20.093 20.359,16.864 23.048,14.825    " />
                        <polygon fill="#FFFFFF" points="0.523,14.756 -0.585,11.569 -1,12.763 -1,18.455 -0.585,18.166 2.185,20.093 1.208,16.864      3.896,14.825    " />
                        <polygon fill="#FFFFFF" points="55.079,33.084 54.102,36.314 56.871,34.386 59.641,36.314 58.664,33.084 61.352,31.045      57.979,30.977 56.871,27.79 55.763,30.977 52.39,31.045    " />
                        <polygon fill="#FFFFFF" points="35.927,33.084 34.949,36.314 37.719,34.386 40.489,36.314 39.511,33.084 42.2,31.045      38.827,30.977 37.719,27.79 36.611,30.977 33.237,31.045    " />
                        <polygon fill="#FFFFFF" points="16.774,33.084 15.797,36.314 18.567,34.386 21.336,36.314 20.359,33.084 23.048,31.045      19.675,30.977 18.567,27.79 17.459,30.977 14.085,31.045    " />
                        <polygon fill="#FFFFFF" points="0.523,30.977 -0.585,27.79 -1,28.983 -1,34.675 -0.585,34.386 2.185,36.314 1.208,33.084      3.896,31.045    " />
                        <polygon fill="#FFFFFF" points="55.079,49.304 54.102,52.534 56.871,50.606 59.641,52.534 58.664,49.304 61.352,47.266      57.979,47.197 56.871,44.01 55.763,47.197 52.39,47.266    " />
                        <polygon fill="#FFFFFF" points="35.927,49.304 34.949,52.534 37.719,50.606 40.489,52.534 39.511,49.304 42.2,47.266      38.827,47.197 37.719,44.01 36.611,47.197 33.237,47.266    " />
                        <polygon fill="#FFFFFF" points="16.774,49.304 15.797,52.534 18.567,50.606 21.336,52.534 20.359,49.304 23.048,47.266      19.675,47.197 18.567,44.01 17.459,47.197 14.085,47.266    " />
                        <polygon fill="#FFFFFF" points="0.523,47.197 -0.585,44.01 -1,45.204 -1,50.896 -0.585,50.606 2.185,52.534 1.208,49.304      3.896,47.266    " />
                        <polygon fill="#FFFFFF" points="55.079,65.829 54.102,69.059 56.871,67.131 59.641,69.059 58.664,65.829 61.352,63.791      57.979,63.722 56.871,60.534 55.763,63.722 52.39,63.791    " />
                        <polygon fill="#FFFFFF" points="35.927,65.829 34.949,69.059 37.719,67.131 40.489,69.059 39.511,65.829 42.2,63.791      38.827,63.722 37.719,60.534 36.611,63.722 33.237,63.791    " />
                        <polygon fill="#FFFFFF" points="16.774,65.829 15.797,69.059 18.567,67.131 21.336,69.059 20.359,65.829 23.048,63.791      19.675,63.722 18.567,60.534 17.459,63.722 14.085,63.791    " />
                        <polygon fill="#FFFFFF" points="2.185,69.059 1.208,65.829 3.896,63.791 0.523,63.722 -0.585,60.534 -1,61.729 -1,67.42      -0.585,67.131    " />
                    </g>
                </g>

                <image width="317" height="634" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUEAAAJ+CAYAAAAtyrLUAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACpJJREFUeNrs3MFq61oWRVHFCOv/ P9cmjXQS4oSEOCDL0pljwIOqTr1CcCdrS+a+zMuyTAARr5fL5fa/zzf/+ezxAAFfI/hRxflzEIoh kDF/n4hiCCQjKIaACIohIIJiCIigGAIiKIaACIohIIJ3x1AIgUM5rfU/9B7D6/s/AI0l6EQGRFAM AREUQ0AE74mhEAK7cdryX+bjCZBcgk5kQATFEBDBP2MohMCmTnv5P+J9IZBcgk5kQASdyED9HHYi A5agVQhYglYhYAneswotQ6AVQScykD2HnciAJWgVApagVQhYglYhYAlahYAlaBUClqBVCFiCViFg CVqFgCVoFQKWoFUIWIJWIWAJ/mMVAiLoPPY0wDnsPHYegyVoFVqFYAlahVYhWIJWoScBIiiEYgjO Yeex8xgsQTG0CEEEhVAMwTnsPHYegyUohhYhiKAQOo/BOew8dh6DJSiGFiGIoBAKIYigEHpPCDvn neDjQ+g9IViCYmgRgggKoRCCCAqh94SwJ94JPieE3hOCJSiGFiGIoBAKIYigEAohiKAQ+mACT+DD yL5C6IMJWIJiaBGCCAqhEIIICqEQgggKoRCCCAqhJwEiKIRiCKvzE5ljhdBPaMASFEOLEERQCIUQ RFAIhRBEUAiFEERQCD0JEEEhBERQCAERFEJABIUQEEEhBERQCAERFEJABNMhFEP4gb9FphNCfwMN WIJiaBGCCAqhEIIICqEQgggKoRAigh6BEHoSiCD1EIIIkmYNIoI4iz0JRBAhBBFECEEEEUIQQYQQ RBAhBBFECEEEEUIQQYQQRBAhBBFECEEEEUIQQZIhBBEkzRpEBHEWexKIIEIIIogQgggihCCCCCGI IOUQggiSZg0igjiLPQlEECEEEUQIQQQRQhBB0iEEESTNGkQEcRZ7EoggQggiiBCCCNIOIYggadYg Ioiz2JNABBFCEEHiIQQRJM0aRARxFnsSiCBCCCJIPIQggqRZg4ggzmJPAhFECEEEiYcQRJA0axAR xFnsSSCCOItBBHEWgwjiLAYRxFkMIoizGEQQZzGIIEIIIkguhCCCpFmDiCDWIIgg1iCIIOE1KISI IM5iEEGcxSCCOItBBHEWgwjiLAYRxFkMIoizGEQQZzGIINYgiCDWIIggkTUohIggzmIQQZzFIIJY gyCCWIMggliDIIJYgyCCxNagECKCOItBBHEWgwhiDYIIYg2CCGINIoJgDSKCYA0igmANIoJgDSKC YA0igmANIoJgDSKCYA0igmANIoJgDSKCYA0igmANIoJgDSKCYA0igmANIoJgDSKCYA0igmANIoJg DSKCYA0iggAiCE5iRBCcxIggWIOIIFiDiCBYg4ggWIOIIIAIgpMYEQQnMSII1iAiCNYgIgggguAk RgTBSYwIgjWICII1iAgCiCA4iRFBcBIjggAiCE5iRBCcxIgggAiCkxgRBCcxIgjWICII1iAiCCCC ACII6/FeUAShy3tBEQQQQXASI4LgJEYEAUQQnMSIIDiJEUEAEQQnMSIITmJEEEAEAUQQhuW9oAhC l/eCIgggggAiCF3eC4ogdHkvKIIAIggggtDlvaAIQpf3giIIIIIAIghd3guKIHR5LyiCACIIIIIA IghJPo6IIHT5OCKCACIIIIIAIghJPo6IIHT5OCKCACIIIIIAIghJPo6IIHT5OCKCACIIIIIAIggg glDjC7EIQpcvxCIIIIIAIgggggAiCCCCACIIDX4rKILQ5beCIgggggAiCCCCACIIIIIAIggggjA8 P5gWQejyg2kRBBBBABEEEEEAEQQQQQARBBBBABEEEEEAEQQQQQARhFH4m2REELr8TTIiCCCCACII IIIAIgggggAiCCCCACIIIIIAIgggggAiCCCCACIIIIIAIgggggAiCCCCACIIIIIAIgggggAiCCCC ACIIiCCACAKbm5dl8RREEMrOHoEIAogggAgCiCCACAKIIIAIAogggAgCiCCACAKIIIAIwmH5G2RE EOr8DTIiCCCCACIIIIIAIgggggAiCCCCMCA/lBZBqPNDaREEEEEAEQQQQQARBBBBGJqfx4gg1Pl5 jAgCiCCACAKIIIAIwvh8GRZBqPNlWAQBRBBABAFEEEAEYXy+DIsg1PkyLIIAIgggggAiCBE+iogg 1PkoIoIAIgggglDifaAIQp33gSIIIIIAIgggghDho4gIQp2PIiIIIIIAIggl3geKINR5HyiCACII TmFEEJzCiCCACAKIIAzL+0ARhDrvA0UQQAQBRBBKvA8UQajzPlAEAUQQnMKIIDiFEUEAEQSnMCII TmFEEEAEwSmMCIJTGBEEEEFwCiOC4BRGBAFEEJzCiCA4hRFBABEEpzAiCE5hRBCsQEQQrEBEEEAE wSmMCIJTGBEEKxARBCsQEQQQQXAKI4LgFEYEwQpEBMEKRAQBRBCcwoggOIURQbACEUGwAhFBsAJF ELACRRCwAkUQsAJFEEAEwSmMCIJTGBEEKxARBCsQEQQrEBEEKxARBCsQEQQrEBEEKxARBCsQEQQr EBEEKxARBCsQEQQrEBEEKxARhL0F0ApEBHEGgwjiDEYEPQKsQEQQrEBEEKxARBCsQEQQrEBEEKxA RBAOH0ArEBHEGQwiiDMYRBArEEQQKxBEECsQRBArEBH0CBgsgFYgIogzGEQQZzCIIM5gEEGcwSCC OINBBLECQQSxAkEEGSOAViAiiDMYRBBnMIggzmAQQZzBIII4g0EEcQaDCOIMBhHEGQwiiDMYRBAB BBHkQAQQESS9AkEEcQaDCOIMBhHEGQwiiDMYRBABBBFkNAKICJJegSCCOINBBBFAEEEiBBARJL0C QQRxBoMIIoAgggggiCBjE0BEkPQKBBHEGQwiiACCCCKAIIKMTQARQdIrEEQQZzCIIAIIIogAgggi gCCCDEkAEUHSKxBEEGcwiCACCCKIAIIIIoAgggggiCACCCKIAIIIclwCiAiSXoEggjiDQQQRQBBB BBBEEAEEEUQAQQQRQBBBBBBEEAEEEUQAQQQRQBBBBBBEEAEEEUQAQQQRQBBBBBBEEAEEEUQAQQQR QBBBBBBEEAEEEUQAQQQRQBBBBBBEEAGEx/758QgOH79JAEEErT/AOSyAgAgKICCCAgiIoAACIiiA gAgKIPDbnzGPYNfxmwQQRND6A5zDAgiIoAACIiiAgAgKILDOnz+P4OnxmwQQRND6A5zDAgiIoAAC IiiAwEZ/Lj2CzeI3CSCIoPUHOIcFELAEnb+ACFp/gHNYAAERFEDAOXzc+E0CCCJo/QHOYQEELEHn LyCC1h/gHBZAwBJ0/gIiaP0BImj9ASJo/QG74cOIAIIlKH7OXxBB6w8QQesPEEHrDxBB6w8QQesP GFziJzICCCSXoPMXSEZQ/IBsBJ2+QDKC1h+QjaD1ByQjaP0B2Qhaf0AygtYfkI2g9QckI2j9AckI ih+QjaDTF0hG0PoDkhEUPyAbQacvkIyg9QckIyh+QDKC4gdkI+i9H5CMoPUHJCMofkAyguIHJCMo fkAyguIHZCPoiy+QjKD1ByQjKH5AMoLiByQjKH5AMoLiB+QieBM+8QM6EbT6gPoSFD8gHcGrxwAA AAAAGW8CDACguaq607nq2AAAAABJRU5ErkJggg==" transform="matrix(0.24 0 0 0.24 75 -0.9995)">
                </image>
            </g>
        </svg>
    );

    // Effect untuk bahasa (simpan preferensi ke localStorage)
    useEffect(() => {
        localStorage.setItem('language', isEnglish ? 'en' : 'id');
    }, [isEnglish]);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="flex justify-between items-center py-3">
                        <Link href="/" className="text-2xl font-bold text-[#3bbced] dark:text-gray-100 flex items-center">
                            <Image src={MulseSVG} alt="img" className="w-12 mr-4" />Mulse Citra Nusa
                        </Link>

                        {/* Menu untuk Desktop */}
                        <div className="hidden lg:flex space-x-6 items-center">
                            <Link href="/" className="nav-link border-b-2 border-transparent hover:border-blue-500">
                                Home
                            </Link>

                            {/* Menu Services dengan Dropdown (Hover di Desktop) */}
                            <div className="relative group" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)} >
                                <button className="nav-link border-b-2 border-transparent hover:border-blue-500 flex items-center">
                                    Services
                                </button>
                                <div className={`bg-white dark:bg-gray-800 absolute top-8 -left-2 w-56 pt-2 p-3 border-2 border-blue-500 shadow-xl rounded-lg overflow-visible transition-all duration-300 ${isDropdownOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"}`} >
                                    <Link href="/pengadaan-barang" className="nav-link hover:bg-gray-100 dark:hover:bg-gray-700 rounded border-b border-gray-200 hover:border-blue-500 block mt-2 px-2" >
                                        Pengadaan Barang
                                    </Link>
                                    <Link href="/jasa-konstruksi" className="nav-link hover:bg-gray-100 dark:hover:bg-gray-700 rounded border-b border-gray-200 hover:border-blue-500 block mt-2 px-2" >
                                        Jasa Konstruksi
                                    </Link>
                                </div>
                            </div>
                            <Link href="https://katalog.mulse.id" target="blank" className="nav-link border-b-2 border-transparent hover:border-blue-500">
                                Catalog
                            </Link>
                            <Link href="/gallery" className="nav-link border-b-2 border-transparent hover:border-blue-500">
                                Gallery
                            </Link>
                            <Link href="/about" className="nav-link border-b-2 border-transparent hover:border-blue-500">
                                About
                            </Link>
                            <Link href="/contact" className="nav-link border-b-2 border-transparent hover:border-blue-500">
                                Contact
                            </Link>
                            {/* Tombol Bahasa */}
                            <button
                                onClick={() => setIsEnglish(!isEnglish)}
                                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-medium text-gray-700 dark:text-gray-300"
                            >
                                {isEnglish ? [iconID] : [iconEN]}
                            </button>
                            <button
                                onClick={() => setIsDarkMode(!isDarkMode)}
                                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            >
                                {isDarkMode ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        {/* Tombol Menu Mobile */}
                        <button className="lg:hidden relative w-8 h-8" onClick={() => setIsOpen(!isOpen)}>
                            <div className={`hamburger ${isOpen ? "rotate-45 top-1/2 transform -translate-y-1/2" : "top-2"}`} ></div>
                            <div className={`hamburger ${isOpen ? "opacity-0" : "top-1/2 transform -translate-y-1/2"}`} ></div>
                            <div className={`hamburger ${isOpen ? "-rotate-45 bottom-1/2 transform translate-y-1/2" : "bottom-2"}`} ></div>
                        </button>
                    </div>
                </div>
            </nav >

            {/* Overlay saat Sidebar terbuka (Hanya di bawah Navbar) */}
            <div className={`lg:hidden fixed top-16 left-0 w-full h-full bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`
            } onClick={() => setIsOpen(false)}></div>

            {/* Sidebar Menu (Di bawah Navbar) */}
            < div className={`bg-white dark:bg-gray-800 lg:hidden fixed top-16 right-0 w-64 h-full shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}  >
                <div className="p-6 flex flex-col space-y-4">
                    <Link href="/" className="nav-link-mobile" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>

                    {/* Menu Services dengan Dropdown di Sidebar (Klik untuk Buka) */}
                    <div>
                        <button className="nav-link-mobile flex items-center w-full" onClick={() => setIsDropdownOpen(!isDropdownOpen)} >
                            Services
                            <span
                                className={`dropdown-arrow ${isDropdownOpen ? "rotate-45 absolute right-9 mb-2" : "-rotate-45 absolute right-9"
                                    }`}
                            ></span>
                        </button>
                        <div className={`bg-white dark:bg-gray-800 ml-4 space-y-2 rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${isDropdownOpen ? "max-h-[500px] opacity-100 p-2 mt-2" : "max-h-0 opacity-0 p-0 mt-0"}`} >
                            <Link href="/pengadaan-barang" className="nav-link-mobile block" onClick={() => setIsOpen(false)} >
                                Pengadaan Barang
                            </Link>
                            <Link href="/jasa-konstruksi" className="nav-link-mobile block" onClick={() => setIsOpen(false)} >
                                Jasa Konstruksi
                            </Link>
                        </div>
                    </div>
                    <Link href="https://katalog.mulse.id" className="nav-link-mobile" onClick={() => setIsOpen(false)}>
                        Catalog
                    </Link>
                    <Link href="/gallery" className="nav-link-mobile" onClick={() => setIsOpen(false)}>
                        Gallery
                    </Link>
                    <Link href="/about" className="nav-link-mobile" onClick={() => setIsOpen(false)}>
                        About
                    </Link>
                    <Link href="/contact" className="nav-link-mobile" onClick={() => setIsOpen(false)}>
                        Contact
                    </Link>
                    <button onClick={() => setIsEnglish(!isEnglish)} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700" >
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                            ({isEnglish ? 'EN' : 'ID'})
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">
                            {isEnglish ? 'Change language' : 'Ubah bahasa'}
                        </span>
                    </button>
                    <button onClick={() => setIsDarkMode(!isDarkMode)} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        {isDarkMode ? (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                                </svg>
                                <span className="text-gray-700 dark:text-gray-300">Light Mode</span>
                            </>

                        ) : (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                                <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
                            </>

                        )}
                    </button>
                </div>
            </div >
        </>
    );
};

export default Navbar;
