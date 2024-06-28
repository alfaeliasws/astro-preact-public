import ProjectItem from "./ProjectItem"
import { BigPar, useFade } from "./Text"
import { SectionTitle } from "./Text"
import react from 'react';

export default function ProjectsSection() {

    useFade('fade-1')

    return (
        <div className="min-h-screen bg-main-100">
            <div className="w-full text-center">
                <div className="text-center mb-[50px]">
                    <BigPar>. . .</BigPar>
                </div>
                <div id="Projects" className="mb-10 fade-1"><SectionTitle>Projects</SectionTitle></div>
                <div className="flex flex-wrap mx-[50px] 2xl:mx-[150px]">
                <div className="w-full flex flex-wrap sm:flex-nowrap">
                        <ProjectItem imgSrc="/on-courses.png" title="On-Courses" href="https://on-courses-heroku.herokuapp.com/"></ProjectItem>
                        <ProjectItem imgSrc="/blog.png" title="Next JS Blog" href="https://alfaeliasblog.netlify.app"></ProjectItem>
                        <ProjectItem imgSrc="/personal.png" title="Personal Website (Next/React)" href="https://alfaeliasws.netlify.app"></ProjectItem>
                    </div>
                    <div className="w-full flex flex-wrap sm:flex-nowrap">
                        <ProjectItem imgSrc="/laravel.png" title="Laravel CRUD"  href="https://github.com/alfaeliasws/laravel-project/blob/main/README.md"></ProjectItem>
                        <ProjectItem imgSrc="/personal.png" title="Personal Website (Astro/Preact)" href="https://alfaeliasastropreact.netlify.app"></ProjectItem>
                        <ProjectItem imgSrc="/ReactPomodoroClock.png" title="React Pomodoro Clock"  href="https://codepen.io/alfaeliaswaristino/full/eYVMQpp"></ProjectItem>
                    </div>
                    <div className="w-full flex flex-wrap sm:flex-nowrap">
                        <ProjectItem imgSrc="/ReactCalculator.png" title="React Calculator" href="https://codepen.io/alfaeliaswaristino/full/eYVMQpp"></ProjectItem>
                        <ProjectItem imgSrc="/Heatmap.png" title="Heatmap D3" href="https://codepen.io/alfaeliaswaristino/full/KKQjjeb"></ProjectItem>
                        <ProjectItem imgSrc="/React Blog.png" title="React Dummy Blog" href="https://dummyreactblog.netlify.app/blog"></ProjectItem>
                    </div>
                </div>
            </div>
        </div>
    )
}