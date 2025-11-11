import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PUBLIC_DIR = join(__dirname, '../public/images');
const SIZES = [128, 256, 512]; // Different sizes for responsive images

async function optimizeImages() {
  try {
    const files = await readdir(PUBLIC_DIR);
    
    for (const file of files) {
      const ext = extname(file).toLowerCase();
      
      // Skip if already webp or not an image
      if (ext === '.webp' || !['.png', '.jpg', '.jpeg'].includes(ext)) {
        continue;
      }

      const inputPath = join(PUBLIC_DIR, file);
      const baseName = basename(file, ext);

      console.log(`\n📸 Processing ${file}...`);

      // Generate WebP versions at different sizes
      for (const size of SIZES) {
        const outputPath = join(PUBLIC_DIR, `${baseName}-${size}.webp`);
        
        await sharp(inputPath)
          .resize(size, size, {
            fit: 'cover',
            position: 'center'
          })
          .webp({ quality: 85 })
          .toFile(outputPath);
        
        const stats = await sharp(outputPath).metadata();
        console.log(`  ✅ Created ${baseName}-${size}.webp (${stats.width}x${stats.height})`);
      }

      // Also create a full-size optimized WebP
      const fullSizePath = join(PUBLIC_DIR, `${baseName}.webp`);
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(fullSizePath);
      
      console.log(`  ✅ Created ${baseName}.webp (optimized full size)`);
    }

    console.log('\n✨ Image optimization complete!\n');
  } catch (error) {
    console.error('Error optimizing images:', error);
    process.exit(1);
  }
}

optimizeImages();
