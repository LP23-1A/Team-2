"use client";

const data = [
  {
    img: "https://s3-alpha-sig.figma.com/img/5d23/d89f/fb399a001ca2c9596b7e4e167945bbdc?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QtRuQ7scZohUz1uAGd3TPwdB6DAAFv5pvk-SgBJgvIzWpazvDA88mMqq-ONhsJqxbbmDr7sU1TM24DJ7r3gl6kR4FraW3JIAMQxyDvRBkuj8HDejIVsZu3OFLH7V3Maeo9AFVwlHRzysIiDebNq2lP7d5LBRaW9EPaLDt-TNlRdKhCyG1sZdZEgITohSCqH6eOt4RYvDZ9khjTVN4Hss~w70d8aI5RE6a-01Q8mq2JdLBRN9MAH0YGBEjsAwn7ya9frhLmReMTno8wqCpUefGC1SBGy-sp2uEKwVRm~~hruTanezFISpjCPfluxt19LG5JxgeVj9~nf9Sk55dil6Qw__",
    name: "Canon камер",
    price: "750’000₮",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/9db5/545f/6002c578779f313538a8a68e1a6f8050?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oznEKJLSEDOSX96A-FKA5WWgpNJDEj6ASTaRzqlXkJGNgC1DTiSMjURwxS3Z6NwNhNJXO9BKSjadnGQDBKtoxD-4ZWIn1Oq7jDIRVDvTqRhgAuf~m3m4aiiBE6hsy5Pim-OOF5EL4DN7iaElZbgBSgrF0Qmkqi-dvYFijggFqUVVUYmbGXeZrB-6FHVU75zQtCFzdUGU~0KXkYsI3VkXjNXXlcUu2lcjKdlp0wP6TJJP3iCnh7kCgNY~RmNqB4PGXkiEz32Llilw57wj6plARviAIlefucgAQ-JNrgWb9M1sJOuPfgB15NuFaJqkjOmKI6EoJPO1QENSTUiejJL82Q__",
    name: "Canon камер",
    price: "750’000₮",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/9db5/545f/6002c578779f313538a8a68e1a6f8050?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oznEKJLSEDOSX96A-FKA5WWgpNJDEj6ASTaRzqlXkJGNgC1DTiSMjURwxS3Z6NwNhNJXO9BKSjadnGQDBKtoxD-4ZWIn1Oq7jDIRVDvTqRhgAuf~m3m4aiiBE6hsy5Pim-OOF5EL4DN7iaElZbgBSgrF0Qmkqi-dvYFijggFqUVVUYmbGXeZrB-6FHVU75zQtCFzdUGU~0KXkYsI3VkXjNXXlcUu2lcjKdlp0wP6TJJP3iCnh7kCgNY~RmNqB4PGXkiEz32Llilw57wj6plARviAIlefucgAQ-JNrgWb9M1sJOuPfgB15NuFaJqkjOmKI6EoJPO1QENSTUiejJL82Q__",
    name: "Canon камер",
    price: "750’000₮",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/9db5/545f/6002c578779f313538a8a68e1a6f8050?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oznEKJLSEDOSX96A-FKA5WWgpNJDEj6ASTaRzqlXkJGNgC1DTiSMjURwxS3Z6NwNhNJXO9BKSjadnGQDBKtoxD-4ZWIn1Oq7jDIRVDvTqRhgAuf~m3m4aiiBE6hsy5Pim-OOF5EL4DN7iaElZbgBSgrF0Qmkqi-dvYFijggFqUVVUYmbGXeZrB-6FHVU75zQtCFzdUGU~0KXkYsI3VkXjNXXlcUu2lcjKdlp0wP6TJJP3iCnh7kCgNY~RmNqB4PGXkiEz32Llilw57wj6plARviAIlefucgAQ-JNrgWb9M1sJOuPfgB15NuFaJqkjOmKI6EoJPO1QENSTUiejJL82Q__",
    name: "Canon камер",
    price: "750’000₮",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/5d23/d89f/fb399a001ca2c9596b7e4e167945bbdc?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QtRuQ7scZohUz1uAGd3TPwdB6DAAFv5pvk-SgBJgvIzWpazvDA88mMqq-ONhsJqxbbmDr7sU1TM24DJ7r3gl6kR4FraW3JIAMQxyDvRBkuj8HDejIVsZu3OFLH7V3Maeo9AFVwlHRzysIiDebNq2lP7d5LBRaW9EPaLDt-TNlRdKhCyG1sZdZEgITohSCqH6eOt4RYvDZ9khjTVN4Hss~w70d8aI5RE6a-01Q8mq2JdLBRN9MAH0YGBEjsAwn7ya9frhLmReMTno8wqCpUefGC1SBGy-sp2uEKwVRm~~hruTanezFISpjCPfluxt19LG5JxgeVj9~nf9Sk55dil6Qw__",
    name: "Canon камер",
    price: "750’000₮",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/c298/504d/adeb68467abfedd08c1e1d67526e0d7a?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KxoGlcr~xTJPRW6bRvhe2IvqW018i~JlcUwXEXMfPCZyfksJZe5cyHCZwaAz5jP1nua-VKig8BZA1YDbIK1ua96v~WVjtNuzTZUXQE9G58suDsiixl6e74H69rQ9qr5Kttp9w6qOjrbpi1N-SnoF5wip2bW51X7B-sfsd16kuBXUiMevd~vooEXL5SYHlTwOj2Z~WMxXHG4Mpu4SQF32m3bM9IF8ATpooSiarhUT6zrC-ToR4uwPgczRT4Aw-OPWPesP5YE3L~LwCiBd45sui~iF7DTFlx4Pi~okvR7Ug6dnToIJAj92eva~vHU81PWTgSgwhxl81BXmPOPdpLgx2A__",
    name: "Canon камер",
    price: "750’000₮",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/c298/504d/adeb68467abfedd08c1e1d67526e0d7a?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KxoGlcr~xTJPRW6bRvhe2IvqW018i~JlcUwXEXMfPCZyfksJZe5cyHCZwaAz5jP1nua-VKig8BZA1YDbIK1ua96v~WVjtNuzTZUXQE9G58suDsiixl6e74H69rQ9qr5Kttp9w6qOjrbpi1N-SnoF5wip2bW51X7B-sfsd16kuBXUiMevd~vooEXL5SYHlTwOj2Z~WMxXHG4Mpu4SQF32m3bM9IF8ATpooSiarhUT6zrC-ToR4uwPgczRT4Aw-OPWPesP5YE3L~LwCiBd45sui~iF7DTFlx4Pi~okvR7Ug6dnToIJAj92eva~vHU81PWTgSgwhxl81BXmPOPdpLgx2A__",
    name: "Canon камер",
    price: "750’000₮",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/5d23/d89f/fb399a001ca2c9596b7e4e167945bbdc?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QtRuQ7scZohUz1uAGd3TPwdB6DAAFv5pvk-SgBJgvIzWpazvDA88mMqq-ONhsJqxbbmDr7sU1TM24DJ7r3gl6kR4FraW3JIAMQxyDvRBkuj8HDejIVsZu3OFLH7V3Maeo9AFVwlHRzysIiDebNq2lP7d5LBRaW9EPaLDt-TNlRdKhCyG1sZdZEgITohSCqH6eOt4RYvDZ9khjTVN4Hss~w70d8aI5RE6a-01Q8mq2JdLBRN9MAH0YGBEjsAwn7ya9frhLmReMTno8wqCpUefGC1SBGy-sp2uEKwVRm~~hruTanezFISpjCPfluxt19LG5JxgeVj9~nf9Sk55dil6Qw__",
    name: "Canon камер",
    price: "750’000₮",
  },
];

function Product() {
  return (
    <div className=" flex flex-col items-center gap-5 my-5">
      <h1 className="text-[#151875] text-[42px] font-extrabold ">
        Шинээр нэмэгдсэн
      </h1>
      <div className="flex w-[1200px] gap[] justify-between flex-wrap ">
        {data.map(({ img, name, price }) => (
          <div>
            <div className="w-[260px] h-[280px] flex justify-center items-center bg-[#F6F7FB]">
              <img
                className="w-[169px] h-[158px] bg-[#F6F7FB] "
                alt="Product"
                src={img}
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[#151875]">{name}</p>
              <p className="text-[#151875]">{price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
