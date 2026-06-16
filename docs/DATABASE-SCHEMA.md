# Database Schema

## MongoDB Collections

### contacts

Stores contact form submissions.

```typescript
{
  _id: ObjectId,
  name: string,        // required, max 100
  email: string,       // required, valid email
  company?: string,    // optional, max 100
  role?: string,       // optional, max 100
  message: string,     // required, 10-2000 chars
  createdAt: Date,     // auto
  updatedAt: Date      // auto
}
```

**Indexes:** `createdAt` (desc) for admin queries

### resumedownloads

Tracks resume PDF downloads.

```typescript
{
  _id: ObjectId,
  downloadedAt: Date,  // default: now
  userAgent?: string,
  ip?: string
}
```

**Indexes:** `downloadedAt` (desc) for analytics

## Connection

- URI: `MONGODB_URI` environment variable
- ODM: Mongoose with connection caching for serverless compatibility
- Graceful fallback: API works without DB (email-only mode)

## Future Collections (CMS-ready)

### blogposts (optional migration)
Move from JSON files to MongoDB when admin panel is needed.

### analytics_events
```typescript
{
  event: string,       // 'page_view' | 'project_click' | 'resume_download'
  metadata: object,
  timestamp: Date
}
```
