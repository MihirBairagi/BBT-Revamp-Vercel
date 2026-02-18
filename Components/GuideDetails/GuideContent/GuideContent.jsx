import React from "react";

const GuideContent = ({ guideData }) => {
  // Fallback content if no guide data is provided
  const defaultContent = {
    content: `
      <p>Among the many technical jargons that you keep on hearing about the automobile, the one that comes up repeatedly in the conversation is about torque vectoring. Today we will like to demystify this term and tell you what it means and why it is so important.</p>
      <br /><br />
      <h3>What is torque vectoring?</h3>
      <br />
      <p style="color: #EF3024; font-style: italic; font-weight: 600;">
        <b>Torque vectoring, in a layman's term, means how the torque produced in the engine is distributed between the wheels or axle to improve the driving experience of a car.</b>
      </p>
      <br /><br />
      <h3>Why is it so important?</h3>
      <br />
      <p>Torque vectoring is very important as it allows you to put weight on different wheels of the car that improve your control over the vehicle in some demanding situations...</p>
    `,
    publishedDate: "Recently Published",
    author: "Big Boy Toyz Team"
  };

  const guide = guideData || defaultContent;

  return (
    <section className="bg-white pt-[4rem] xl:pt-[6rem] pb-[6rem] lg:pb-[8rem] xl:pb-[12rem] 3xl:pb-[15rem]">
      <div className="max-1920">
        <div className="container">
          {/* Guide Meta Information */}
          <div className="text-center mb-[4rem] xl:mb-[6rem]">
            <p className="text-gray-600 text-[1.2rem] xl:text-[1.4rem] mb-2">
              Published on {guide.publishedDate || defaultContent.publishedDate}
            </p>
            <p className="text-gray-600 text-[1.1rem] xl:text-[1.3rem]">
              By {guide.author || defaultContent.author}
            </p>
            {guide.views && (
              <p className="text-gray-500 text-[1rem] xl:text-[1.2rem] mt-1">
                {guide.views} views
              </p>
            )}
          </div>

          {/* Guide Content */}
          <div className="[&>p]:font-light [&>p]:text-[1.3rem] xl:[&>p]:text-[1.4rem] 2xl:[&>p]:text-[1.6rem] 3xl:[&>p]:text-[1.9rem] [&>h3]:leading-[1.2] [&>h3]:tracking-[-1.5px] [&>h3]:text-[2.4rem] xl:[&>h3]:text-[3rem] 1xl:[&>h3]:text-[3.4rem] 2xl:[&>h3]:text-[3.8rem] 3xl:[&>h3]:text-[4.5rem] lg:w-[90%] mx-auto xl:w-[60%] [&>img]:w-full [&>img]:block [&>img]:h-auto [&>img]:rounded-[1rem] [&_b]:font-medium [&>p]:mb-4 [&>h3]:mb-4 [&>h3]:mt-8">
            {guide.content ? (
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: guide.content.replace(/\n/g, '<br />') 
                }}
              />
            ) : (
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: defaultContent.content 
                }}
              />
            )}
          </div>

          {/* Guide Tags */}
          {guide.type && (
            <div className="text-center mt-[4rem] xl:mt-[6rem]">
              <span className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-[1.1rem] xl:text-[1.3rem] capitalize">
                {guide.type}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GuideContent;
