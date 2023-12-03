import React from 'react'

interface TitleSectionProps {
	title: string
	subheading?: string
	pill: string
}

const TitleSection: React.FC<TitleSectionProps> = ({
	title,
	subheading,
	pill,
}) => {
	return (
		<section className='flex flex-col gap-3 md:justify-center md:items-center'>
			<div className='max-w-fit rounded-full p-[2px] text-sm dark:bg-gradient-to-r dark:from-brand-primaryBlue dark:to-brand-primaryPurple'>
				<div className='dark:bg-black rounded-full py-2 px-3'>{pill}</div>
			</div>
			{!!subheading ? (
				<>
					<h2 className='text-left md:text-center text-3xl sm:text-5xl max-w-[750px] font-semibold'>
						{title}
					</h2>
					<article className='mt-4 dark:text-washed-purple-700 sm:max-w-[450px] md:text-center'>
						{subheading}
					</article>
				</>
			) : (
				<h1 className='text-5xl text-left md:text-center font-semibold md:text-6xl sm:max-w-[850px]'>
					{title}
				</h1>
			)}
		</section>
	)
}

export default TitleSection
