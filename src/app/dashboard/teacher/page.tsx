'use client';
import NoticeTab from '@/components/teacher-dashboard/NoticeTab';
import ProjectManagementTab from '@/components/teacher-dashboard/ProjectManagementTab';
import StudentManagement from '@/components/teacher-dashboard/StudentManagementTab';
import TeamManagementTab from '@/components/teacher-dashboard/TeamManagementTab';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Page = () => {
    const [activeTab, setActiveTab]: any = useState('Student');

    return (
        <div className='w-dvw flex flex-col p-4 items-center justify-evenly'>
            <div className='w-full flex gap-3 p-1'>
                {['Student', 'Project', 'Team', 'Notice', 'Settings'].map(
                    (tab) => (
                        <Button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            variant={'ghost'}
                            className={`w-60 h-14 p-2 rounded-md shadow-md flex items-center hover:bg-blue-500 justify-center transition-all duration-200 ${
                                activeTab === tab
                                    ? 'bg-blue-400 text-black'
                                    : ''
                            }`}>
                            {tab.charAt(0).toUpperCase() + tab.slice(1)} {tab}
                        </Button>
                    )
                )}
            </div>
            <div>
                <span className='text-blue-500'>
                    {activeTab === 'Student' && <StudentManagement />}
                    {activeTab === 'Project' && <ProjectManagementTab />}
                    {activeTab === 'Team' && <TeamManagementTab />}
                    {activeTab === 'Notice' && <NoticeTab />}
                    {activeTab === 'Settings' && 'Settings'}
                </span>
            </div>
        </div>
    );
};

export default Page;
