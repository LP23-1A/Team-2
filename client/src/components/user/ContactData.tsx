import React from 'react';

const contactData = [
    {
        image : "https://s3-alpha-sig.figma.com/img/f006/4cfe/cd7d7e333cb343c07df1a46d3ba07d2c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qFbRmEaRQTETwN9BmmKhOlQzvc9Q5TjxiMOLYcIvXCCDx8CxrC-z57iTIwI1V-48Mm9CFYHL2dsBjuaDcWC7jCWd8iETWJm9GiJyg9TV08YKpnjYYDf0PI1DYDI6KO0xnQBj2ILKcb-LweuIkgdcheVDL6Vh1625rUIAdhbkJGxHIhG~oAC-QPCNE53v2BKYOhBNtVg~DTHQLoyZfqF2ce4NND7gWPOlbQxyfI8oE8BvKLiX~8Ghgl~BSPa~-VgTg4DkkC9~2WcCKlJkZvU5Akpl6W-SBpqTBeXaj~gbwdKSQqb3wqgfXS6uV3Z-Rb9Y1JejJWzY-Tb3ddol0ifDmw__",
        name : "Үүргэвч",
        color : "Өнгө: Саарал",
        price : '750000₮'
    },
    {
        image : "https://s3-alpha-sig.figma.com/img/6ba6/31c6/52aa6039f04fb7dc0be25d473ae49bfc?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HactQgMvnZp4oc8QjCV6QIj-rY3twRvageroJfVjZK79fJBlA0B1AFFzgMW6bqPpqx2NqSA~6-EqTLMbmauQ6OoI94pECnpA2-Od0o2gi7f4xmcVNsNS3Yn2OWu7dtn5rNdmfHZp2sfBPkyp2oFxacdoaZYuWJOz54MbIWfMDW-CeHsMEWvq4I3lOagQxJi0g4ie2KWB3r-FhcPlAxGRaBfcWLE3nvB7-yiaLxyrvGWAUzD4Z9iWiTtHLslHBjQ28nJKdLubGZLYM40VfEPvqd2RyzrI1ntg88I0riqkobP7fqFlVUB6Q4IQZU~qFAAuU6KUw-cdPLcppF3S-jYWEw__",
        name : "Электрон цаг",
        color : "Өнгө: Brown",
        price : '750000₮'
    },
    {
        image : "https://s3-alpha-sig.figma.com/img/65e9/a2e3/2197e755ec35c2801fa25a7c99aa3c9a?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJQohepFa4LMuM124OEGdGPoAzoPSx2t6~hvpMusqfRjb4M64BLQeKOM6Ms9mR3~sVrg7JHApd7T012m-L0IPGv1-OPjxh7mi61lFJJUSEMnvg2EQxiF1LbLv8Ib5gFQr53EF-40mJKRMXhvrKoWgD8htt5Kvuog7fIIdR~5cOAaQqZsRKpthoR9CKwdgyd9CWOtpYbcpv4aU8mM14jD5waBtFcp2l4bvdYFBO15fQ-2saN86q5QFyj2diEW9sc9gFG3enJfbX1YpxFh9Pk2I30y5KU-vDv6kpCInUJXoahVgg-5nQbJcYTKBIO7NipQYo9-dgIq3TVow8R7Ty7ZjA__",
        name : "Арьсан оосортой цаг",
        color : "Өнгө: Бор",
        price : '750000₮'
    },
    {
        image : "https://s3-alpha-sig.figma.com/img/bf20/87e8/ffecc8128db8041f18b2faad13f1debb?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jjWA8fL9zDmB4~9fcIJAC5PDkvcG2YTLjHYU48n77NjBEZfiP3DEwy5xV624sf3ieSyzF15shlX3pH3p3-6O-1kN~zadz7P2zXyjF8rShkXlg8u6e8exfA8ATm8QE-FiCCpBQXqGh0mI7HwtkxUFDIdp-Z4dtC6AqZD5AdGInrvGacx6y6CWb78A8jis-Fivi1FeRRX7~nQeTEWNyx4yQflyp0aw1p4MhfX0inrRCJDTkMHPb4T1~S-IlV4v7GdOSPGSORXTzli7kVDaNAOM-F8OIdvYs84aUg9k3AcmloXDLv3y2xvkyXugIk3G1iYbYtTEzI9GFrOy96pnA2FHOA__",
        name : "Подолк",
        color : "Өнгө: Саарал",
        price : '750000₮'
    },
    {
        image : "https://s3-alpha-sig.figma.com/img/dddc/63a9/e8d14dd0cd2fe920968f105cfbd1cac9?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=piH04jK68sMXXI6pF0YJrAzwKUChtIUH1AyY99OtsXBdaMdlIrVCy~StXC4dDymq2oml1qr9zK159Ah~ZXeteFZ31RYjctLXSoMMnonYGK-IJ82vIPPMe5UmhbplVKBrrUZlZ09lX~QaZvPtedIAMV7Q1R4FE9DnY1t6U-aD0kURkgb2uuDe2ylUR-H2HHvNTJmigVWHKfkYkVJ~pV1T4O7yChE0rTC5s5e~Kpbgt-L1hkIO6BMi3imD~JoQyQs1UAuZ9g~A4XKlIhH6VmuBWjS2o-DCaAvJFZBdWdoG-XFAo18rjjFdwjSVavq5j7yW-CPzpFFvFbIaDK9iHbRD5w__",
        name : "Загварлаг цаг",
        color : "Өнгө: Бор",
        price : '750000₮'
    }
]

export default function ContactData() {
    return (
        <div>
            {contactData.map((el) => {
            return(
                <section className='flex items-center justify-between mt-[20px]'>
                    <div>
                        <img className='w-[86px] h-[87px] rounded-md' src={el.image} alt="" />
                    </div>
                    <div className='flex flex-col font-[800]'>
                        <p className=' text-[14px]'>
                            {el.name}
                        </p>
                        <p className='text-[#A1A8C1] text-[12px] mt-[5px]'>
                            {el.color}
                        </p>
                    </div>
                    <div>
                        {el.price}
                    </div>
                </section>
            )
        })}
        </div>
    )
}