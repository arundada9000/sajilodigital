import { MetadataRoute } from 'next';
import { services } from '../data/services';
import { blogPosts } from '../data/blog';
import { projects } from '../data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://sajilodigital.com.np';

    // Base routes
    const staticRoutes = [
        '',
        '/about',
        '/services',
        '/blog',
        '/projects',
        '/contact',
        '/faq',
        '/testimonials',
        '/about/team',
        '/pricing',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic service routes
    const serviceRoutes = services.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Dynamic blog routes
    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }));

    // Dynamic project routes
    const projectRoutes = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...projectRoutes];
}
