'use client';
import React, { FC } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/Tabs';
import SimpleBar from 'simplebar-react';

const DocumentationTabs = () => {
    return (
        <Tabs
            defaultValue='nodejs'
            className='max-w-2xl w-full'
        >
            <TabsList>
                <TabsTrigger value='nodejs'>NodeJS</TabsTrigger>
                <TabsTrigger value='python'>Python</TabsTrigger>
                <TabsContent value='nodejs'>
                    <SimpleBar></SimpleBar>
                    <Code />
                </TabsContent>
                <TabsContent value='python'></TabsContent>
            </TabsList>
        </Tabs>
    );
};

export default DocumentationTabs;
